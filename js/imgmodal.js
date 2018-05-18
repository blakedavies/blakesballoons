$(document).ready(function(){
	var modal = document.getElementById('imgmodal');
	var galleryimg1 = document.getElementById('galleryimg1');
	var galleryimg2 = document.getElementById('galleryimg2');
	var galleryimg3 = document.getElementById('galleryimg3');
	var galleryimg4 = document.getElementById('galleryimg4');
	var galleryimg5 = document.getElementById('galleryimg5');
	var galleryimg6 = document.getElementById('galleryimg6');
	var galleryimg7 = document.getElementById('galleryimg7');
	var galleryimg8 = document.getElementById('galleryimg8');
	var galleryimg9 = document.getElementById('galleryimg9');
	var galleryimg10 = document.getElementById('galleryimg10');
	var galleryimg11 = document.getElementById('galleryimg11');
	var galleryimg12 = document.getElementById('galleryimg12');
	var imgmodal = document.getElementById("img01");
	galleryimg1.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	galleryimg2.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	galleryimg3.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	galleryimg4.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	galleryimg5.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	galleryimg6.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	galleryimg7.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	galleryimg8.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	galleryimg9.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	galleryimg10.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	galleryimg11.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	galleryimg12.onclick = function(){
		modal.style.display = "block";
		imgmodal.src = this.src;
	}
	var span = document.getElementsByClassName("close")[0];
	span.onclick = function() { 
		modal.style.display = "none";
	}
});