import{MeshPhongMaterial}from'./MeshPhongMaterial.js';function MeshToonMaterial(a){MeshPhongMaterial.call(this),this.defines={TOON:''},this.type='MeshToonMaterial',this.gradientMap=null,this.setValues(a)}MeshToonMaterial.prototype=Object.create(MeshPhongMaterial.prototype),MeshToonMaterial.prototype.constructor=MeshToonMaterial,MeshToonMaterial.prototype.isMeshToonMaterial=!0,MeshToonMaterial.prototype.copy=function(a){return MeshPhongMaterial.prototype.copy.call(this,a),this.gradientMap=a.gradientMap,this};export{MeshToonMaterial};