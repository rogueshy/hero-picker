$(document).ready(function () {
	var uWc,uSc,uDi,uCl,uOv = $();
	var rSin,rSup,rSpec,rWar = $();
	// ����
	$(".columnRole input:checkbox").change(function () {
		var className = $(this).val();
		if (this.checked == true) {
			if (className == "Assassin") { rSin = 1; }
			else if (className == "Support") { rSup = 1; }
			else if (className == "Specialist") { rSpec = 1; }
			else { rWar = 1; }
			$('.' + className).each(function() {
				if (uWc == 0) {
					$(this).prop('checked', true);
					$('.Warcraft').prop('checked', false);
				}
				else if (uSc == 0) {
					$(this).prop('checked', true);
					$('.Starcraft').prop('checked', false);
				}
				else if (uDi == 0) {
					$(this).prop('checked', true);
					$('.Diablo').prop('checked', false);
				}
				else if (uCl == 0) {
					$(this).prop('checked', true);
					$('.Classic').prop('checked', false);
				}
				else if (uOv == 0) {
					$(this).prop('checked', true);
					$('.Overwatch').prop('checked', false);
				}
				else { $(this).prop('checked', true); }
			});
		}	else {
				if (className == "Assassin") { rSin = 0; }
				else if (className == "Support") { rSup = 0; }
				else if (className == "Specialist") { rSpec = 0; }
				else { rWar = 0; }
				$('.' + className).each(function () {
					if (uWc == 1) {
					$(this).prop('checked', false);
					$('.Warcraft').prop('checked', true);
					}
					else if (uSc == 1) {
					$(this).prop('checked', false);
					$('.Starcraft').prop('checked', true);
					}
					else if (uDi == 1) {
					$(this).prop('checked', false);
					$('.Diablo').prop('checked', true);
					}
					else if (uCl == 1) {
					$(this).prop('checked', false);
					$('.Classic').prop('checked', true);
					}
					else if (uOv == 1) {
					$(this).prop('checked', false);
					$('.Overwatch').prop('checked', true);
					}
					else { $(this).prop('checked', false); }
				});
		}
	});
	
	// ������� ���� ������ � �� ���
	
	
	// ���������
	$(".columnUniverse input:checkbox").change(function () {
		var uniName = $(this).val();
		if (this.checked == true) {
			if (uniName == "Warcraft") { uWc = 1; }
			else if (uniName == "Starcraft") { uSc = 1; }
			else if (uniName == "Diablo") { uDi = 1; }
			else if (uniName == "Classic") { uCl = 1; }
			else { uOv = 1; }
			$('.' + uniName).each(function() {
				if (rSin = 0) {
					$(this).prop('checked', true);
					$('.Assassin').prop('checked', false);
				}
				else if (rSup = 0) {
					$(this).prop('checked', true);
					$('.Support').prop('checked', false);
				}
				else if (rSpec = 0) {
					$(this).prop('checked', true);
					$('.Specialist').prop('checked', false);
				}
				else if (rWar = 0) {
					$(this).prop('checked', true);
					$('.Warrior').prop('checked', false);
				}
				else { $(this).prop('checked', true); }
			});
		}	else {
				if (uniName == "Warcraft") { uWc = 0; }
				else if (uniName == "Starcraft") { uSc = 0; }
				else if (uniName == "Diablo") { uDi = 0; }
				else if (uniName == "Classic") { uCl = 0; }
				else { uOv = 0; }
			$('.' + uniName).each(function () {
				if (rSin = 1) {
					$(this).prop('checked', false);
					$('.Assassin').prop('checked', true);
				}
				else if (rSup = 1) {
					$(this).prop('checked', false);
					$('.Support').prop('checked', true);
				}
				else if (rSpec = 1) {
					$(this).prop('checked', false);
					$('.Specialist').prop('checked', true);
				}
				else if (rWar = 1) {
					$(this).prop('checked', false);
					$('.Warrior').prop('checked', true);
				}
				else { $(this).prop('checked', false); }
				});
		}
	});
});

