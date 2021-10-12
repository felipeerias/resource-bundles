import{Loader}from'./Loader.js';import{AnimationClip}from'../animation/AnimationClip.js';import{Vector3}from'../math/Vector3.js';import{Vector4}from'../math/Vector4.js';import{Color}from'../math/Color.js';import{Vector2}from'../math/Vector2.js';import{Face3}from'../core/Face3.js';import{Geometry}from'../core/Geometry.js';import{FileLoader}from'./FileLoader.js';import{DefaultLoadingManager}from'./LoadingManager.js';function JSONLoader(a){'boolean'==typeof a&&(console.warn('THREE.JSONLoader: showStatus parameter has been removed from constructor.'),a=void 0),this.manager=a===void 0?DefaultLoadingManager:a,this.withCredentials=!1}Object.assign(JSONLoader.prototype,{load:function(a,b,c,d){var e=this,f=this.texturePath&&'string'==typeof this.texturePath?this.texturePath:Loader.prototype.extractUrlBase(a),g=new FileLoader(this.manager);g.setResponseType('json'),g.setWithCredentials(this.withCredentials),g.load(a,function(c){var d=c.metadata;if(d!==void 0){var g=d.type;if(g!==void 0){if('object'===g.toLowerCase())return void console.error('THREE.JSONLoader: '+a+' should be loaded with THREE.ObjectLoader instead.');if('scene'===g.toLowerCase())return void console.error('THREE.JSONLoader: '+a+' should be loaded with THREE.SceneLoader instead.')}}var h=e.parse(c,f);b(h.geometry,h.materials)},c,d)},setTexturePath:function(a){this.texturePath=a},parse:function(){function a(a,b){function c(a,b){return a&1<<b}var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,w,x,y,z,A,B,C,D,E,u,v=a.faces,F=a.vertices,G=a.normals,H=a.colors,I=a.scale,J=0;if(a.uvs!==void 0){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&J++;for(d=0;d<J;d++)b.faceVertexUvs[d]=[]}for(g=0,h=F.length;g<h;)w=new Vector3,w.x=F[g++]*I,w.y=F[g++]*I,w.z=F[g++]*I,b.vertices.push(w);for(g=0,h=v.length;g<h;)if(m=v[g++],n=c(m,0),o=c(m,1),p=c(m,3),q=c(m,4),r=c(m,5),s=c(m,6),t=c(m,7),n){if(y=new Face3,y.a=v[g],y.b=v[g+1],y.c=v[g+3],z=new Face3,z.a=v[g+1],z.b=v[g+2],z.c=v[g+3],g+=4,o&&(l=v[g++],y.materialIndex=l,z.materialIndex=l),f=b.faces.length,p)for(d=0;d<J;d++)for(C=a.uvs[d],b.faceVertexUvs[d][f]=[],b.faceVertexUvs[d][f+1]=[],e=0;4>e;e++)k=v[g++],E=C[2*k],u=C[2*k+1],D=new Vector2(E,u),2!==e&&b.faceVertexUvs[d][f].push(D),0!==e&&b.faceVertexUvs[d][f+1].push(D);if(q&&(j=3*v[g++],y.normal.set(G[j++],G[j++],G[j]),z.normal.copy(y.normal)),r)for(d=0;4>d;d++)j=3*v[g++],B=new Vector3(G[j++],G[j++],G[j]),2!==d&&y.vertexNormals.push(B),0!==d&&z.vertexNormals.push(B);if(s&&(i=v[g++],A=H[i],y.color.setHex(A),z.color.setHex(A)),t)for(d=0;4>d;d++)i=v[g++],A=H[i],2!==d&&y.vertexColors.push(new Color(A)),0!==d&&z.vertexColors.push(new Color(A));b.faces.push(y),b.faces.push(z)}else{if(x=new Face3,x.a=v[g++],x.b=v[g++],x.c=v[g++],o&&(l=v[g++],x.materialIndex=l),f=b.faces.length,p)for(d=0;d<J;d++)for(C=a.uvs[d],b.faceVertexUvs[d][f]=[],e=0;3>e;e++)k=v[g++],E=C[2*k],u=C[2*k+1],D=new Vector2(E,u),b.faceVertexUvs[d][f].push(D);if(q&&(j=3*v[g++],x.normal.set(G[j++],G[j++],G[j])),r)for(d=0;3>d;d++)j=3*v[g++],B=new Vector3(G[j++],G[j++],G[j]),x.vertexNormals.push(B);if(s&&(i=v[g++],x.color.setHex(H[i])),t)for(d=0;3>d;d++)i=v[g++],x.vertexColors.push(new Color(H[i]));b.faces.push(x)}}function b(e,f){var g=e.influencesPerVertex===void 0?2:e.influencesPerVertex;if(e.skinWeights)for(var h=0,i=e.skinWeights.length;h<i;h+=g){var j=e.skinWeights[h],k=1<g?e.skinWeights[h+1]:0,l=2<g?e.skinWeights[h+2]:0,m=3<g?e.skinWeights[h+3]:0;f.skinWeights.push(new Vector4(j,k,l,m))}if(e.skinIndices)for(var h=0,i=e.skinIndices.length;h<i;h+=g){var n=e.skinIndices[h],a=1<g?e.skinIndices[h+1]:0,b=2<g?e.skinIndices[h+2]:0,c=3<g?e.skinIndices[h+3]:0;f.skinIndices.push(new Vector4(n,a,b,c))}f.bones=e.bones,f.bones&&0<f.bones.length&&(f.skinWeights.length!==f.skinIndices.length||f.skinIndices.length!==f.vertices.length)&&console.warn('When skinning, number of vertices ('+f.vertices.length+'), skinIndices ('+f.skinIndices.length+'), and skinWeights ('+f.skinWeights.length+') should match.')}function c(a,b){var c=a.scale;if(a.morphTargets!==void 0)for(var d=0,e=a.morphTargets.length;d<e;d++){b.morphTargets[d]={},b.morphTargets[d].name=a.morphTargets[d].name,b.morphTargets[d].vertices=[];for(var f,g=b.morphTargets[d].vertices,h=a.morphTargets[d].vertices,i=0,j=h.length;i<j;i+=3)f=new Vector3,f.x=h[i]*c,f.y=h[i+1]*c,f.z=h[i+2]*c,g.push(f)}if(void 0!==a.morphColors&&0<a.morphColors.length){console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');for(var k=b.faces,l=a.morphColors[0].colors,d=0,e=k.length;d<e;d++)k[d].color.fromArray(l,3*d)}}function d(a,b){var c=[],d=[];a.animation!==void 0&&d.push(a.animation),a.animations!==void 0&&(a.animations.length?d=d.concat(a.animations):d.push(a.animations));for(var e,f=0;f<d.length;f++)e=AnimationClip.parseAnimation(d[f],b.bones),e&&c.push(e);if(b.morphTargets){var g=AnimationClip.CreateClipsFromMorphTargetSequences(b.morphTargets,10);c=c.concat(g)}0<c.length&&(b.animations=c)}return function(e,f){void 0!==e.data&&(e=e.data),e.scale=void 0===e.scale?1:1/e.scale;var g=new Geometry;if(a(e,g),b(e,g),c(e,g),d(e,g),g.computeFaceNormals(),g.computeBoundingSphere(),void 0===e.materials||0===e.materials.length)return{geometry:g};var h=Loader.prototype.initMaterials(e.materials,f,this.crossOrigin);return{geometry:g,materials:h}}}()});export{JSONLoader};