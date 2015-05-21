/**
 * declare THREEx namespace
 * @type {[type]}
 */
var THREEx	= THREEx	|| {};

/**
 * THREEx extension
 *
 * @constructor
 * @param {THREE.Geometry?} geometry the geometry to use, default to a cylinder
 */
THREEx.VolumetricSpotlightMesh	= function(geometry){
	// handle arguments value
	if( geometry === undefined ){
		var geometry	= new THREE.CylinderGeometry(0.0, 1.5, 5, 32*2, 20, true)
		geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, -geometry.parameters.height/2, 0 ) )
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -Math.PI / 2 ) )
	}
	// add spot light
	var material	= new THREEx.VolumetricSpotLightMaterial()
	var object3d	= new THREE.Mesh( geometry, material )
	this.object3d	= object3d

	// mesh.position.set(1.5,2,0)
	// mesh.lookAt(new THREE.Vector3(0,0, 0))

	// material.uniforms.lightColor.value.set('white')
	// material.uniforms.spotPosition.value	= mesh.position

	/**
	 * update the object position in world coordinates -
	 */
	this.update	= function(){
		// set the world position of the spotPosition
		object3d.updateMatrixWorld()
		var matrixWorld	= object3d.matrixWorld
		var worldPos	= material.uniforms.spotPosition.value
		worldPos.setFromMatrixPosition(matrixWorld)
	}

	this.syncLight	= function(spotLight){
		console.assert(spotLight instanceof THREE.SpotLight)
		// TODO
		console.assert(false, 'not yet implemented')

		object3d.lookAt(spotLight.target)
		material.uniforms.lightColor.value	= spotLight.color
	}
}
