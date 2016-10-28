<script type="text/javascript">
var slideimages=new Array()
function slideshowimages()
{
for (i=0;i<slideshowimages.arguments.length;i++)
{
slideimages[i]=new Image()
slideimages[i].src=slideshowimages.arguments[i]
}
}
</script>
</head>
<body>
	<div id="header">
	<img src="banner1.jpg" alt="Slideshow Image Script" title="Slideshow Image Script" name="slide" border=0 width=1330 height=270>
<script type="text/javascript">
slideshowimages("banner1.jpg","banner2.jpg","bannerlag1.jpg")
var slideshowspeed=6000
var whichimage=0
function slideit()
{
if (!document.images)
return
document.images.slide.src=slideimages[whichimage].src
if (whichimage<slideimages.length-1)
whichimage++
else
whichimage=0
setTimeout("slideit()",slideshowspeed)
}
slideit()
</script>