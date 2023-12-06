const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');

content.textContent = 'This is the glorious text-content!';
                            
container.appendChild(content);

const content2 = document.createElement ('p');
content2.textContent = "Hey I'm red";  
container.appendChild(content2);
content2.style.color = 'red';


const content3 = document.createElement('h3');
content3.textContent = "I'm a blue h3!";
container.appendChild(content3);
content3.style.color = 'blue';


const contentlist = document.createElement('div');

contentlist.classList.add('contentlist');
contentlist.setAttribute('style', 'color: black; background: pink; border-color: black');    
container.appendChild(contentlist);


const content4 = document.createElement ('h1');
content4.textContent = " I'm in a div";
contentlist.appendChild(content4);

const content5 = document.createElement ('p');
content5.textContent = "Me too!";
contentlist.appendChild(content5);


