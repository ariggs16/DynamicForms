$(document).ready(function(){
	$.getJSON("http://json-data.herokuapp.com/forms", function(data){
		var htmlStr = ''

		data.forEach(function(subject){
			if (subject.type === 'text') {
				htmlStr += `<div class="subject"><i class="fa ${subject.icon}" aria-hidden="true"></i><input type ="${subject.type}" placeholder="${subject.label}" id="${subject.id}" /></div>`
			}

			if (subject.type === 'email') {
				htmlStr += `<div class="subject"><i class="fa ${subject.icon}" aria-hidden="true"></i><input type ="${subject.type}" placeholder="${subject.label}" id="${subject.id}" /></div>`
			}

			if (subject.type === 'tel') {
				htmlStr += `<div class="subject"><i class="fa ${subject.icon}" aria-hidden="true"></i><input type ="${subject.type}" placeholder="${subject.label}" id="${subject.id}" /></div>`
			}

			if (subject.type === 'select') {
				htmlStr += `<select id="${subject.id}">
					<option value=''>${subject.label}</option>`

					subject.options.forEach(function(option){
						htmlStr += `<option value="${option.value}">${option.label}</option>`
					})

				htmlStr += `</select>`
			}

			if (subject.type === 'textarea') {
				htmlStr += `<div class="textarea"><i class="fa ${subject.icon}" aria-hidden="true"></i><textarea id ="${subject.id}" placeholder="${subject.label}"></textarea></div>`
			}
		})

		console.log(htmlStr)
		

		htmlStr += `<button type="submit form">Submit Form</button>`

		$("#sign").html(htmlStr)

	})
})