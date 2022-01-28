let body = document.getElementById("body");
body.innerHTML = `
<style id = "style">
</style>
<header id="header">
    
</header>
<section id="section">


</section>
<footer id="footer">
</footer>
`;

let style = document.getElementById("style");
style.innerHTML = ` 
iframe {
    border: 1px solid black;
    width: 100%;
}

.output {
    background: #eee;`;

let header = document.getElementById("header");
header.innerHTML = `

<h1>Maps - NetWebAppsJs</h1>

`;

let section = document.getElementById("section");
section.innerHTML = `

<!--iframe
 width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=34.9407371878624%2C29.55446645322359%2C34.94373053312302%2C29.555796379459803&amp;layer=mapnik" 
 style="border: 1px solid black">
        </iframe>
        <br/>
        <small>
        <a href="https://www.openstreetmap.org/#map=19/29.55513/34.94223">
        View Larger Map
        </a>
</small-->
        <br>
        <iframe width="425" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=31.832885742187504%2C29.602118211647333%2C37.96325683593751%2C32.287132632616384&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=8/30.954/34.898&amp;layers=G">View Larger Map</a></small>
        <br>
        <iframe width="425" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=33.36547851562501%2C30.28041626667403%2C36.43066406250001%2C31.62298248226682&amp;layer=cyclosm" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=9/30.9541/34.8981&amp;layers=YG">View Larger Map</a></small>
        <br>
        <iframe width="425" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=33.36547851562501%2C30.28041626667403%2C36.43066406250001%2C31.62298248226682&amp;layer=cyclemap" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=9/30.9541/34.8981&amp;layers=CG">View Larger Map</a></small>
        <br>
        <iframe width="425" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=33.36547851562501%2C30.28041626667403%2C36.43066406250001%2C31.62298248226682&amp;layer=transportmap" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=9/30.9541/34.8981&amp;layers=TG">View Larger Map</a></small>
        <br>
        <iframe width="425" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=33.36547851562501%2C30.28041626667403%2C36.43066406250001%2C31.62298248226682&amp;layer=opnvkarte" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=9/30.9541/34.8981&amp;layers=OG">View Larger Map</a></small>
        <br>
        <iframe width="425" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=33.36547851562501%2C30.28041626667403%2C36.43066406250001%2C31.62298248226682&amp;layer=hot" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=9/30.9541/34.8981&amp;layers=HG">View Larger Map</a></small>
        <br>
        `;

let footer = document.getElementById('footer');
footer.innerHTML = `

           <p>C уважением, Берлин Андрей.</p>

        `;