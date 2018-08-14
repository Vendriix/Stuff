//🔥🔥🔥🔥🔥🔥

//By Vendrix
//Doctype JavaScript


window.onload = function(){
    var canvas = document.getElementById("fire");
    var ctx = canvas.getContext("2d");    
    
    var W = window.innerWidth, H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;    
    var particles = [];
    var Smokeparticles = [];

    var particle_count = 450;
    var flamewidth = 350;
    for(var i = 0; i < particle_count; i++)
    {
        particles.push(new particleFlame());
    } 
function particleFlame()
    {
    
        this.speed = {x: -2.5+Math.random()*5, y: -15+Math.random()*10};
        
    var locmin = (W/2)-(flamewidth/2); var locmax = (W/2)+(flamewidth/2);
    this.location = {x: Math.random()*(locmax - locmin)+locmin, y: H};  
        this.radius = Math.random()*(50-100)+50;
        //durée de vie = 20-30
        this.life = 20+Math.random()*10;
        this.remaining_life = this.life;
        //couleurs
        this.r = '255';
        this.g = Math.round(Math.random()*(100 - 190) + 100);
        this.b = Math.round(Math.random()*(10 - 30) + 10);
    }
    
    function drawFlames()
    {
        //Le backgroung Nwarrr
        //La magie des lightning woaah
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, W, H);
        ctx.globalCompositeOperation = "lighter";
        
        for(var i = 0; i < particles.length; i++)
        {
            var p = particles[i];
            ctx.beginPath();
            //changement d'opacité
            //opacité descend à 0 a la fin de la vie d'une particule
            p.opacity = Math.round(p.remaining_life/p.life*100)/100;
            //un petit dégradé
            var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
            gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
            gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
            gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
            ctx.fillStyle = gradient;
            ctx.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
            ctx.fill();
            
            //Les particules bougent ici
            p.remaining_life--;
            p.radius--;
        p.radius--;
            p.location.x += p.speed.x;
            p.location.y += p.speed.y;
            
            //Les particules
            if(p.remaining_life < 0 || p.radius < 0)
            {
                //Une nouvelle particule pour remplacer la particule morte
                particles[i] = new particleFlame();
            }
        }
        
    }
    
    setInterval(drawFlames);
};
