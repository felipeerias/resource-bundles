function Cylindrical(a,b,c){return this.radius=void 0===a?1:a,this.theta=void 0===b?0:b,this.y=void 0===c?0:c,this}Object.assign(Cylindrical.prototype,{set:function(a,b,c){return this.radius=a,this.theta=b,this.y=c,this},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.radius=a.radius,this.theta=a.theta,this.y=a.y,this},setFromVector3:function(a){return this.radius=Math.sqrt(a.x*a.x+a.z*a.z),this.theta=Math.atan2(a.x,a.z),this.y=a.y,this}});export{Cylindrical};