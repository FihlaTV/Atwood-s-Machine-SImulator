function calcular(){
	var igualdad1, igualdad2, masa1, masa2, m1, m2, 
	gravedad, g, p1, p2, aceleracion, a, t, tension;

	// Variables para la function animation
 	var rueda = document.getElementById("circulo");
	var box = document.getElementById("b1");
	var box2 = document.getElementById("b2");
	var cuerda1 = document.getElementById("rope1");
	var cuerda2 = document.getElementById("rope2");
	var audio = document.getElementById("audio");
	var rotate, b1, b2, c1, c2;


 	masa1 = document.getElementById("masa1").value;
 	m1 = parseFloat(masa1);
 	masa2 = document.getElementById("masa2").value;
 	m2 = parseFloat(masa2);
 	gravedad = document.getElementById("gravedad").value;
 	g = parseFloat(gravedad);


 	// Se calcula el peso de ambos objetos
 	peso1 = m1 * g;
 	peso2 = m2 * g;
 	p1 = parseFloat(peso1.toFixed(2));
 	p2 = parseFloat(peso2.toFixed(2));
 	// -------------------------------

 	// Se calculan las igualdades por separado
 	igualdad1 = (p1 - p2);
	igualdad2 = (m1 + m2);
	igu1 = igualdad1.toFixed(2);
	igu2 = igualdad2.toFixed(2);

	// Calculo para la aceleracion
	aceleracion = (igu1/igu2);
	a = aceleracion.toFixed(2);

	// Calculo para la tension
	t = m2 * a;
	tension = p2 + t;
	t = parseFloat(t.toFixed(2));
	tension = parseFloat(tension.toFixed(2));


 	function result(m1, m2, p1, p2, g, a, t, tension){
 		document.getElementById("demo1").innerHTML = 
		"Peso de ambos objetos: m * g <br>" +
		"p1 = " + m1 + " * " + g + " = " + p1 + "<br>" +
		"p2 = " + m2 + " * " + g + " = " + p2 + "<br><br>"
		;
		document.getElementById("demo2").innerHTML = 
		"Aceleracion : <br" +
		"<p>p1 - p2 = (m1 + m2) * a</p>" 
		+ p1 + " - " + p2 + " = (" + m1 + " + " + m2 + ") * " + "a <br>"
		+ igu1 + " = " + igu2 + " * a <br>"
		+ igu1 + " / " + igu2 + " = a <br>"
		+ a + " = a <br><br>";

		document.getElementById("demo3").innerHTML = 
		"Tension de la cuerda: T - p2 = m2 * a <br>" +
		"T - " + p2 + " = " + m2 + " * " + a + "<br>" +
		"T = " + p2 + " + " + t + "<br>" + 
		"T = " + tension;
 	}

 	function animation(rueda, box, box2, cuerda1, cuerda2){
 		var count = 180;
 		String(count);

		if(m1 > m2){
			rotate = "rotate("+-count+"deg)";
			b1 = "70%";
			b2 = "30%";
			c1 = "385px";
			c2 = "105px";
		} else if(m1 < m2){
			rotate = "rotate("+count+"deg)";
			b1 = "30%";
			b2 = "70%";
			c1 = "105px";
			c2 = "385px";
		} else {
			if(box.style.top == "30%" && box2.style.top == "70%"){
			rotate = "rotate("+-count+"deg)";
			b1 = "50%";
			b2 = "50%";
			c1 = "245px";
			c2 = "245px";
			} else if(box.style.top == "70%" && box2.style.top == "30%"){
				rotate = "rotate("+count+"deg)";
				b1 = "50%";
				b2 = "50%";
				c1 = "245px";
				c2 = "245px";
				}
		}	
		//circulo
		rueda.style.transition = "3s";
		rueda.style.transform = rotate;

		//masa 1
		box.style.transition = "3s"
		box.style.top = b1;

		//masa 2
		box2.style.transition = "3s"
		box2.style.top = b2;

		//cuerda1
		cuerda1.style.transition = "3s"
		cuerda1.style.height = c1;

		//cuerda2
		cuerda2.style.transition = "3s"
		cuerda2.style.height = c2;

		//Audio de rueda
		audio.play();

 	}

	if(p1 > p2){
		result(m1, m2, p1, p2, g, a, t, tension);
		animation(rueda, box, box2, cuerda1, cuerda2);

} else if(p1 == p2){
		result(m1, m2, p1, p2, g, a, t, tension);
		animation(rueda, box, box2, cuerda1, cuerda2);

} else{
		result(m1, m2, p1, p2, g, a, t, tension);
		animation(rueda, box, box2, cuerda1, cuerda2);
	} 
}	

function reload(){
	location.reload();
}
