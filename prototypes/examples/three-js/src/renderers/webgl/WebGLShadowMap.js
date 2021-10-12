import{FrontSide,BackSide,DoubleSide,RGBAFormat,NearestFilter,PCFShadowMap,RGBADepthPacking}from'../../constants.js';import{WebGLRenderTarget}from'../WebGLRenderTarget.js';import{ShaderMaterial}from'../../materials/ShaderMaterial.js';import{UniformsUtils}from'../shaders/UniformsUtils.js';import{ShaderLib}from'../shaders/ShaderLib.js';import{MeshDepthMaterial}from'../../materials/MeshDepthMaterial.js';import{Vector4}from'../../math/Vector4.js';import{Vector3}from'../../math/Vector3.js';import{Vector2}from'../../math/Vector2.js';import{Matrix4}from'../../math/Matrix4.js';import{Frustum}from'../../math/Frustum.js';function WebGLShadowMap(a,b,c,d){function e(b,c,d,e){var f=b.geometry,g=null,h=s,i=b.customDepthMaterial;if(d&&(h=t,i=b.customDistanceMaterial),!i){var j=!1;c.morphTargets&&(f&&f.isBufferGeometry?j=f.morphAttributes&&f.morphAttributes.position&&0<f.morphAttributes.position.length:f&&f.isGeometry&&(j=f.morphTargets&&0<f.morphTargets.length)),b.isSkinnedMesh&&!1===c.skinning&&console.warn('THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:',b);var k=b.isSkinnedMesh&&c.skinning,l=0;j&&(l|=q),k&&(l|=r),g=h[l]}else g=i;if(a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length){var m=g.uuid,n=c.uuid,o=u[m];void 0===o&&(o={},u[m]=o);var p=o[n];void 0===p&&(p=g.clone(),o[n]=p),g=p}g.visible=c.visible,g.wireframe=c.wireframe;var v=c.side;return F.renderSingleSided&&v==DoubleSide&&(v=FrontSide),F.renderReverseSided&&(v===FrontSide?v=BackSide:v===BackSide&&(v=FrontSide)),g.side=v,g.clipShadows=c.clipShadows,g.clippingPlanes=c.clippingPlanes,g.wireframeLinewidth=c.wireframeLinewidth,g.linewidth=c.linewidth,d&&void 0!==g.uniforms.lightPos&&g.uniforms.lightPos.value.copy(e),g}function f(b,d,g,h){if(!1!==b.visible){var m=b.layers.test(d.layers);if(m&&(b.isMesh||b.isLine||b.isPoints)&&b.castShadow&&(!b.frustumCulled||j.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,b.matrixWorld);var n=c.update(b),o=b.material;if(Array.isArray(o))for(var q=n.groups,r=0,k=q.length;r<k;r++){var s=q[r],t=o[s.materialIndex];if(t&&t.visible){var u=e(b,t,h,p);a.renderBufferDirect(g,null,n,u,b,s)}}else if(o.visible){var u=e(b,o,h,p);a.renderBufferDirect(g,null,n,u,b,null)}}for(var v=b.children,w=0,i=v.length;w<i;w++)f(v[w],d,g,h)}}var g=a.context,h=a.state,j=new Frustum,k=new Matrix4,l=b.shadows,m=new Vector2,n=new Vector2(d.maxTextureSize,d.maxTextureSize),o=new Vector3,p=new Vector3,q=1,r=2,s=[,,,,],t=[,,,,],u={},v=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,1,0),new Vector3(0,-1,0)],w=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,0,1),new Vector3(0,0,-1)],x=[new Vector4,new Vector4,new Vector4,new Vector4,new Vector4,new Vector4],y=new MeshDepthMaterial;y.depthPacking=RGBADepthPacking,y.clipping=!0;for(var z=ShaderLib.distanceRGBA,A=UniformsUtils.clone(z.uniforms),B=0;B!==(q|r)+1;++B){var i=0!=(B&q),C=0!=(B&r),D=y.clone();D.morphTargets=i,D.skinning=C,s[B]=D;var E=new ShaderMaterial({defines:{USE_SHADOWMAP:''},uniforms:A,vertexShader:z.vertexShader,fragmentShader:z.fragmentShader,morphTargets:i,skinning:C,clipping:!0});t[B]=E}var F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap,this.renderReverseSided=!0,this.renderSingleSided=!0,this.render=function(b,c){if(!1!==F.enabled&&(!1!==F.autoUpdate||!1!==F.needsUpdate)&&0!==l.length){h.disable(g.BLEND),h.buffers.color.setClear(1,1,1,1),h.buffers.depth.setTest(!0),h.setScissorTest(!1);for(var d,e,q=0,i=l.length;q<i;q++){var r=l[q],s=r.shadow;if(void 0===s){console.warn('THREE.WebGLShadowMap:',r,'has no shadow.');continue}var t=s.camera,u=s.matrix;if(p.setFromMatrixPosition(r.matrixWorld),t.position.copy(p),m.copy(s.mapSize),m.min(n),r&&r.isPointLight){d=6,e=!0;var y=m.x,z=m.y;x[0].set(2*y,z,y,z),x[1].set(0,z,y,z),x[2].set(3*y,z,y,z),x[3].set(y,z,y,z),x[4].set(3*y,0,y,z),x[5].set(y,0,y,z),m.x*=4,m.y*=2,u.makeTranslation(-p.x,-p.y,-p.z)}else d=1,e=!1,o.setFromMatrixPosition(r.target.matrixWorld),t.lookAt(o),t.updateMatrixWorld(),t.matrixWorldInverse.getInverse(t.matrixWorld),u.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),u.multiply(t.projectionMatrix),u.multiply(t.matrixWorldInverse);if(null===s.map){s.map=new WebGLRenderTarget(m.x,m.y,{minFilter:NearestFilter,magFilter:NearestFilter,format:RGBAFormat}),s.map.texture.name=r.name+'.shadowMap',t.updateProjectionMatrix()}s.isSpotLightShadow&&s.update(r);var A=s.map;a.setRenderTarget(A),a.clear();for(var B=0;B<d;B++){if(e){o.copy(t.position),o.add(v[B]),t.up.copy(w[B]),t.lookAt(o),t.updateMatrixWorld(),t.matrixWorldInverse.getInverse(t.matrixWorld);var C=x[B];h.viewport(C)}k.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),j.setFromMatrix(k),f(b,c,t,e)}}var D=a.getClearColor(),E=a.getClearAlpha();a.setClearColor(D,E),F.needsUpdate=!1}}}export{WebGLShadowMap};