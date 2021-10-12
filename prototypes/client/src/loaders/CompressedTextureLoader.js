import{LinearFilter}from'../constants.js';import{FileLoader}from'./FileLoader.js';import{CompressedTexture}from'../textures/CompressedTexture.js';import{DefaultLoadingManager}from'./LoadingManager.js';function CompressedTextureLoader(a){this.manager=a===void 0?DefaultLoadingManager:a,this._parser=null}Object.assign(CompressedTextureLoader.prototype,{load:function(a,b,c,d){function e(e){f.load(a[e],function(a){var c=g._parser(a,!0);h[e]={width:c.width,height:c.height,format:c.format,mipmaps:c.mipmaps},k+=1,6==k&&(1===c.mipmapCount&&(j.minFilter=LinearFilter),j.format=c.format,j.needsUpdate=!0,b&&b(j))},c,d)}var g=this,h=[],j=new CompressedTexture;j.image=h;var f=new FileLoader(this.manager);if(f.setPath(this.path),f.setResponseType('arraybuffer'),Array.isArray(a))for(var k=0,l=0,i=a.length;l<i;++l)e(l);else f.load(a,function(a){var c=g._parser(a,!0);if(c.isCubemap)for(var d=c.mipmaps.length/c.mipmapCount,e=0;e<d;e++){h[e]={mipmaps:[]};for(var f=0;f<c.mipmapCount;f++)h[e].mipmaps.push(c.mipmaps[e*c.mipmapCount+f]),h[e].format=c.format,h[e].width=c.width,h[e].height=c.height}else j.image.width=c.width,j.image.height=c.height,j.mipmaps=c.mipmaps;1===c.mipmapCount&&(j.minFilter=LinearFilter),j.format=c.format,j.needsUpdate=!0,b&&b(j)},c,d);return j},setPath:function(a){return this.path=a,this}});export{CompressedTextureLoader};