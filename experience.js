document.addEventListener('DOMContentLoaded', function() {
				document.querySelector('select').onchange = function() {
					document.querySelectorAll('.exp-description').forEach(exp => {
						exp.style.color = this.value;
					});
				}
		
				/* poniżej to samo z użyciem przycisków:
				document.querySelectorAll('button').forEach(button => {
					button.onclick = () => {
						document.querySelector('#hello').style.color = button.dataset.color;
					}
				});
				lub
				document.querySelector('#red').onclick = function() {
					document.querySelector('#hello').style.color = 'red';
				}
				document.querySelector('#blue').onclick = function() {
					document.querySelector('#hello').style.color = 'blue';
				}
				document.querySelector('#green').onclick = function() {
					document.querySelector('#hello').style.color = 'green';
				}*/
			});