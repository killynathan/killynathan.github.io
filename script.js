var ball = document.getElementById('ball');
var menuWeb = document.getElementById('menuWeb');
var menuAbout = document.getElementById('menuAbout');
var menuBlog = document.getElementById('menuBlog');
var about = document.getElementById('about');
var web = document.getElementById('web');

menuWeb.onclick = function() {
	ball.style.left = '9px';
	ball.style.backgroundColor = '#FF69B4';
	about.style.opacity = '0';
	web.style.opacity = '100';
	about.style.zIndex = '-1';
};

menuAbout.onclick = function() {
	ball.style.left = '92px';
	ball.style.backgroundColor = '#39FF14';
	about.style.opacity = '100';
	web.style.opacity=  '0';
	about.style.zIndex = '2';
};

menuBlog.onclick = function() {
	ball.style.left = '177px'
};








