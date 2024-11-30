
const resultlist = document.getElementById("resultlist");

// html string
const htmlStr = `
                        <a href="https://darksoul-codepen.github.io/How-to-center-an-image-using-display-flex.html"><li><p>How to Center an Image Using Display Flex</p></li></a>
                        <a href="https://darksoul-codepen.github.io/How-to-create-and-style-buttons-like-bootstrap.html"><li><p>How to Create and Style Buttons like Bootstrap</p></li></a>
                        <a href="https://darksoul-codepen.github.io/How-to-Create-an-Animated-Alert-box.html"><li><p>How to Create an Animated Alert Box</p></li></a>
                        <a href="https://darksoul-codepen.github.io/How-to-Find-the-Size-of-a-GitHub-Repository.html"><li><p>How to Find the Size of a GitHub Repo</p></li></a>
                        <a href="https://darksoul-codepen.github.io/How-to-merge-Video-and-Text-in-PPT.html"><li><p>How to Merge Video and Text in PPT</p></li></a>
                        <a href="https://darksoul-codepen.github.io/How-to-merge-Picture-and-Text-in-PPT.html"><li><p>How to Merge Picture and Text in PPT</p></li></a>
                        <a href="https://darksoul-codepen.github.io/How-to-create-an-animated-pop-up-box.html"><li><p>How to Create an Animated Pop-up Box</p></li></a>
                        <a href="https://darksoul-codepen.github.io/CSS-Shapes-Lab.html"><li><p>CSS Shapes Lab Codedamn</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Header-Tag-Lab.html"><li><p>Header Tag Lab Codedamn</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Radio-Buttons-Lab.html"><li><p>Radio Buttons Lab Codedamn</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Fibonacci-Generator-Lab.html"><li><p>Fibonacci Generator Lab Codedamn</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Color-Change-Lab.html"><li><p>Color Change Lab Codedamn</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Glassy-Date-Time-Weather-Widget.html"><li><p>Glassy Date,Time & Weather Widget CodePen</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Glassy-Music-Player.html"><li><p>Glassy Music Player CodePen</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Circular-Navigation-Menu.html"><li><p>Circular Navigation Menu CodePen</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Neumorphic-Theme-Toggle-Switch.html"><li><p>Neumorphism Toggle Switch CodePen</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Glowing-Border-Button.html"><li><p>Glowing Border Button CodePen</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Sticky-Search-Bar.html"><li><p>Sticky Search Bar CodePen</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Glowing-Gradient-Border-cards.html"><li><p>Glowing Gradient Border Cards CodePen</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Hover-Fill-Card.html"><li><p>Hover Fill Card CodePen</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Hover-Fill-Button.html"><li><p>Hover Fill Button CodePen</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Preloader.html"><li><p>Preloader CodePen</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Fluid-Tab-Bar.html"><li><p>Fluid Tab Bar</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Blurred-Side-Navigation-bar.html"><li><p>Blurred Side Navigation Bar</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Fluid-Liquid-Circle-Animation.html"><li><p>Fluid Liquid Circle Animation</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Modern-Button-Border-Hover-Effect.html"><li><p>Modern Button Border Hover Effect</p></li></a>
                        <a href="https://darksoul-codepen.github.io/Glassy-Loading-Page.html"><li><p>Glassy Loading Page</p></li></a>

                   `;

// make a new parser
const parser = new DOMParser();

// convert html string into DOM
const result = parser.parseFromString(htmlStr, "text/html");

// Extract the body content from the parsed HTML
const nodes = result.body.childNodes;

// Append each node to the result list
nodes.forEach(node => {
    resultlist.appendChild(node);
});