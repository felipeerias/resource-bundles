import{Material}from'./Material.js';import{MultiplyOperation}from'../constants.js';import{Vector2}from'../math/Vector2.js';import{Color}from'../math/Color.js';function MeshPhongMaterial(a){Material.call(this),this.type='MeshPhongMaterial',this.color=new Color(16777215),this.specular=new Color(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap='round',this.wireframeLinejoin='round',this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(a)}MeshPhongMaterial.prototype=Object.create(Material.prototype),MeshPhongMaterial.prototype.constructor=MeshPhongMaterial,MeshPhongMaterial.prototype.isMeshPhongMaterial=!0,MeshPhongMaterial.prototype.copy=function(a){return Material.prototype.copy.call(this,a),this.color.copy(a.color),this.specular.copy(a.specular),this.shininess=a.shininess,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this};export{MeshPhongMaterial};