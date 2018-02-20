
var docHeight = document.getElementsByClassName('customList')[0]
window.onscroll = function () {
	var heightTop = document.documentElement.scrollTop + document.body.scrollTop
	if (heightTop > 600) {
		docHeight.style = 'display: block'
	} else {
		docHeight.style = 'display: none'
	}
}
