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

TODO REFACTORING
================
* rename parts
  * material is one 
    * THREEx.VolumetricSpotLightMaterial
  * the actual cylinder is another
    * THREEx.VolumetricSpotLightMesh
  * link it to an actual light
    * something sync it

TODO
====
* DONE remove any depth 
* if so it become a simple geometry rendering, so one pass
* put the depth work in a backup direction
  * experimentDepth

TODO
====
* make a datGUI for it.
* issue with depthMap
  * using DepthMaterial atm so 8bits for depth
  * using 'depthRGBA' would provide a 32bits... much better
    * i cant take it off for whatever reason
* may be in the rendering of the depth texture with shader material
* THREE.MeshDepthMaterial produces 8bits depth… not too funky
  * What about rewriting the 'depth' shader... would that fix my issue ?
  * if so it isnt in the packDepth function
  * it is in the init/rendering of the depthPass
