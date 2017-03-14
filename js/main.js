$(document).ready(function(){
	$.getJSON("http://json-data.herokuapp.com/forms", function(data){
		var htmlStr = ""

		data.forEach(function(subject){
			if (subject.type === 'text') {
				htmlStr += `i class="fa ${subject.icon}" aria-hidden="true"></i><input type ="${subject.type}" placeholder="${subject.label}" id="${subject.id} />"`
			}

			if (subject.type === 'email') {
				htmlStr += `i class="fa ${subject.icon}" aria-hidden="true"></i><input type ="${subject.type}" placeholder="${subject.label}" id="${subject.id} />"`
			}

			if (subject.type === 'tel') {
				htmlStr += `i class="fa ${subject.icon}" aria-hidden="true"></i><input type ="${subject.type}" placeholder="${subject.label}" id="${subject.id} />"`
			}

			if (subject.type === 'select') {
				htmlStr += `<select id=${subject.id}>
					<option value=''>${subject.label}</option>`

					subject.option.forEach(function(option){
						htmlStr += `<option value="${option.value}">"${option.label}"</option>`
					})

				htmlStr += `</select>`
			}

			if (subject.type === 'textarea') {
				htmlStr += `i class="fa ${subject.icon}" aria-hidden="true"></i><textarea id ="${subject.id}" placeholder="${subject.label}"></textarea>`
			}
		})

		$("#form").html(htmlStr)

	})
})