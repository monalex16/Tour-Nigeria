<!-- this script got from www.javascriptfreecode.com-Coded by: Krishna Eydat -->
<HTML><HEAD>
<meta http-equiv="Content-Language" content="en-us">
<META http-equiv=Content-Type content="text/html; charset=windows-1252">
<META content="Microsoft FrontPage 6.0" name=GENERATOR></HEAD>
<BODY>
<DIV id=Zittertext 
style="FONT-WEIGHT: bold; FONT-SIZE: 25pt; FILTER: Wave(freq=5, light=0, phase=8, strength=1); WIDTH: 100%; COLOR: orange">
  <p align="center"><font color="#000000">
  <span style="background-color: #FFFF00">www.javascriptfreecode.com</span></font></DIV>
<SCRIPT language=JavaScript>
<!--
function DynWave()
{
  if(document.all.Zittertext.filters[0].freq > 130)
     document.all.Zittertext.filters[0].freq = 15;
  document.all.Zittertext.filters[0].freq += 1;
  if(document.all.Zittertext.filters[0].phase > 50)
     document.all.Zittertext.filters[0].phase = 1;
 document.all.Zittertext.filters[0].phase += 1;
  if(document.all.Zittertext.filters[0].strength > 1)
     document.all.Zittertext.filters[0].strength = .1;
  document.all.Zittertext.filters[0].strength += 1;
  window.setTimeout("DynWave()",100);
}
DynWave();
// -->
</SCRIPT>
</BODY></HTML>
<font face="Tahoma"><a target="_blank" href="http://www.javascriptfreecode.com/"><span style="font-size: 8pt; text-decoration: none">JavaScript Free Code</span></a></font>s