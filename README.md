threex.volumetricspotlight
==========================

threex.volumetricspotlight is a three.js extension which provide a 'good enought' spot light.
as in described in 
["Good Enough" Volumetrics for Spotlights](http://john-chapman-graphics.blogspot.fr/2013/01/good-enough-volumetrics-for-spotlights.html)
post from 
[john chapman](http://john-chapman-graphics.blogspot.fr/).
Well almost the same, it doesn't include the 
[soft](http://blog.wolfire.com/2010/04/Soft-Particles) 
[particles](http://www.gamerendering.com/2009/09/16/soft-particles/)
feature when the spot cross the ground.
I implemented it but THREE.DepthMaterial is storing depth on 8 bit.
It creates strong precisions issues. 

Show Don't Tell
===============
* [examples/basic.html](http://jeromeetienne.github.io/threex.volumetricspotlight/examples/basic.html)
\[[view source](https://github.com/jeromeetienne/threex.volumetricspotlight/blob/master/examples/basic.html)\] :
It shows a basic example of the usage.


How To Install It
=================

You can install it via script tag

```html
<script src='threex.volumetricspotlight.js'></script>
```

Or you can install with [bower](http://bower.io/), as you wish.

```bash
bower install threex.volumetricspotlight
```

How To Use It
=============

threex.volumetricspotlighthelper.js
===================================

Create the object and attached it to the scene.

```javascript
var helper  = new THREEx.VolumetricSpotLightHelper(light)
scene.add(helper.object3d);
```

Then at every frame rendered, you update it.

```
helper.update(deltaSecond, nowSecond);
```

threex.volumetricspotlightmaterial.js
=====================================

```javascript
var geometry = new THREE.CylinderGeometry(0.0, 1.5, 5, 32*2, 20, true)
var material = new THREEx.VolumetricSpotLightMaterial(light)
var mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
```

Possible Improvements 
=====================

### TODO
* do a minecraft animation 
  * elvis skin
  * 2 spots
  * one music
* simple minecraft animation
  * a mincraft character animatied
  * 2 spots

### use Depth for 'soft particles'
* the original post from chapman include 'soft particles'
  * i couldnt get it to work
  * to be precise, it worked with THREE.MeshDepthMaterial
  * but it lacked precision because the depth is stored on 8bits
  * i tried with 'depthRGBA' shader which pack it in 32bits
  * but i failed to take it off
* issue with depthMap
  * using DepthMaterial atm so 8bits for depth
  * using 'depthRGBA' would provide a 32bits... much better
    * i cant take it off for whatever reason
* may be in the rendering of the depth texture with shader material
* THREE.MeshDepthMaterial produces 8bits depth… not too funky
  * What about rewriting the 'depth' shader... would that fix my issue ?
  * if so it isnt in the packDepth function
  * it is in the init/rendering of the depthPass
