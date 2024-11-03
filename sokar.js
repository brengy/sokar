document.addEventListener('DOMContentLoaded', function() {
    const Atext = `

 Mohammed Maher Mohamed Khalil

Email: mm1949108@gmail.com
Phone: +20 01141178061
Date of Birth: June 1, 1995


<=Professional Summary=>
 Highly motivated in Bachelor of Commerce, Accounting Major with hands-on experience in accounting,
 purchasing, maintenance, and marketing. Skilled in various technologies,
 including surveillance and robotics systems.
 Recognized for delivering exceptional results under pressure, public speaking,
 and creativity in arts such as acting and poetry recitation.


<=Education=>

Bachelor of Commerce, Accounting Major

Graduated: 2017

Military Service
Exempted from military service.

Skills
•	Computer Proficiency: Skilled in Microsoft Office Suite.
•	English Language: Intermediate proficiency.
•	Technology & Development: Proficient in setting up and programming surveillance cameras,
				  alarm systems, and robotics.
•	Work Under Pressure: Excel in high-stress environments.
•	Public Speaking: Confident and articulate speaker.
•	Creativity: Talented in acting, poetry recitation, voice over and puppet manipulation.


<=Professional Experience=>

((Robotics & Programming Trainer))
Providing training in robotics and programming.
Accountant, Procurement Manager, Maintenance Supervisor, and Marketer
<Jasmin International Pre-School>

- Managed accounting tasks, procurement, and maintenance for the nursery.
- Assisted Dr. Noha Sultan, the nursery owner, in various administrative duties.

Personal Assistant to Dr. Noha Sultan
Provided personal and administrative support.

Owner of Sokar Shirts Brand
Developed and managed a custom-printed T-shirt brand, focusing on unique designs.

Owner of Sokar Tech Brand

Owned and operated a brand specializing in selling and supplying smartwatches and surveillance cameras.

Scout Leader & Children’s Supervisor
Scouting Academy & Eish Safari Program
- Led and supervised children in various activities.

<=Certifications & Training=>
Received certified training courses and certifications from various institutions.



    `.trim().split('\n');

    let lineIndex = 0;
    let charIndex = 0;
    const speed = 50; // Adjust typing speed here (lower is faster)

    // Create and configure the audio element
    const audio = new Audio('typing.ogg'); // Replace with the path to your audio file
    audio.volume = 1; // Adjust volume if needed

    function AtypeWriter() {
 
        if (lineIndex < Atext.length) {
            if (charIndex < Atext[lineIndex].length) {
                document.getElementById('typingEffect').innerHTML += Atext[lineIndex].charAt(charIndex);
                charIndex++;
            //   audio.play(); 
              
                setTimeout(AtypeWriter, speed);
            } else {
                document.getElementById('typingEffect').innerHTML += '<br>';
                lineIndex++;
                charIndex = 0;
				 
                setTimeout(AtypeWriter, speed);
            }
        }
    }


	
    document.getElementById('AstartButton').addEventListener('click', function() {
        // Hide the button after clicking
        this.style.display = 'none';
		audio.play(); // Play the audio
        AtypeWriter();
    });
	
	

	
});
