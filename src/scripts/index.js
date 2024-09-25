let state = {
  value: 60,
	isAnimate: false,
	isHide: false
};

const progress = document.querySelector('.progress');
const hideBtn = document.querySelector('.hide-btn');
const animateBtn = document.querySelector('.animate-btn');
const valueProgress = document.getElementById('value');
const progressBar = document.querySelector('.progress-bar');

function controlProgress(state) {
	if(state.isHide === true) {
		progress.classList.add('hidden');
		hideBtn.classList.add('button--active');
	} else {
		progress.classList.remove('hidden');
		hideBtn.classList.remove('button--active');
	}

	if(state.isAnimate === true) {
		progress.classList.add('animate');
		animateBtn.classList.add('button--active');
	} else {
		progress.classList.remove('animate');
		animateBtn.classList.remove('button--active');
	}
	valueProgress.placeholder = state.value;
	progressBar.style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(blue ${state.value}%, rgb(238 238 255) 0)`;
}

function toggleHide() {
	if(!hideBtn.classList.contains('button--active')) {
		state.isHide = true;
	} else {
		state.isHide = false;
	}
	controlProgress(state);
}

function toggleAnimate() {
	if(!animateBtn.classList.contains('button--active')) {
		state.isAnimate = true;
	} else {
		state.isAnimate = false;
	}
	controlProgress(state);
}

function validate() {
	if(valueProgress.value > 100) {
		valueProgress.value = 100;
	}
	if(valueProgress.value.length > 1 && valueProgress.value.toString()[0] === '0') {
		valueProgress.value = valueProgress.value.slice(1);
	}
	if((/[^0-9]/g).test(valueProgress.value)) {
		valueProgress.value = '';
	}
	state.value = valueProgress.value;
	controlProgress(state);
}

hideBtn.addEventListener('click', toggleHide);
animateBtn.addEventListener('click', toggleAnimate);
valueProgress.addEventListener('input', validate);

controlProgress(state);