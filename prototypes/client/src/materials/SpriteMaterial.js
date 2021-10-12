import{Material}from'./Material.js';import{Color}from'../math/Color.js';function SpriteMaterial(a){Material.call(this),this.type='SpriteMaterial',this.color=new Color(16777215),this.map=null,this.rotation=0,this.fog=!1,this.lights=!1,this.setValues(a)}SpriteMaterial.prototype=Object.create(Material.prototype),SpriteMaterial.prototype.constructor=SpriteMaterial,SpriteMaterial.prototype.isSpriteMaterial=!0,SpriteMaterial.prototype.copy=function(a){return Material.prototype.copy.call(this,a),this.color.copy(a.color),this.map=a.map,this.rotation=a.rotation,this};export{SpriteMaterial};