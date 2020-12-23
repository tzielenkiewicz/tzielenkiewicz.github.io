document.addEventListener('DOMContentLoaded', function() {
				document.querySelector('select').onchange = function() {
					document.querySelectorAll('.exp-description').forEach(exp => {
						exp.style.color = this.value;
					});
				}
					
			});