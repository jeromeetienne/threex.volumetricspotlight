/**
 * vendor.js framework definition
 * @type {Object}
 */
var THREEx	= THREEx || {};

THREEx.addVolumetricSpotlightMaterial2DatGui	= function(material, datGui){
	datGui		= datGui || new dat.GUI()
	var uniforms	= material.uniforms
	// options
	var options  = {
		anglePower	: uniforms['anglePower'].value,
		attenuation	: uniforms['attenuation'].value,
		lightColor	: '#'+uniforms.lightColor.value.getHexString(),
	}
	var onChange = function(){
		uniforms['anglePower'].value	= options.anglePower
		uniforms['attenuation'].value	= options.attenuation
		uniforms.lightColor.value.set( options.lightColor ); 
	}
	onChange()
	
	// config datGui
	datGui.add( options, 'anglePower', 0, 10)	.listen().onChange( onChange )
	datGui.add( options, 'attenuation', 0, 10)	.listen().onChange( onChange )
	datGui.addColor( options, 'lightColor' )	.listen().onChange( onChange )
}