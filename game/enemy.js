var Enemy = function(name, color, position, direction) {

    this.name = name;
    this.position = position;
    this.life = 3;
    this.bullets = new Array();
    this.direction = direction;
    this.speed = 0;
    this.flag = 0;

    this.material = new THREE.MeshLambertMaterial({
        color: color,
        });

    var singleGeometry = new THREE.Geometry();

    vehiculeMesh = new THREE.ConeGeometry(5, 20, 32);
    this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
    this.graphic.position.z = 6;

   // this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), this.direction+(3*Math.PI/2));
};

Enemy.prototype.dead = function () {
    this.graphic.position.z = this.graphic.position.z-0.1;
        //Nettoyage de la div container
        $("#container").html("");
        jQuery('#'+this.name+' >.life').text("Tu es mort !");
        init();
}

Enemy.prototype.accelerate = function (distance) {
    var max = 2;

    this.speed += distance / 4;
    if (this.speed >= max) {
        this.speed = max;
    }
};


Enemy.prototype.moveup = function () {
    var moveTo = new THREE.Vector3(
        this.position.x,
        2 + this.position.y,
        this.graphic.position.z
    );

    this.position = moveTo;
    this.graphic.position.x = this.position.x;
    this.graphic.position.y = this.position.y;
};

Enemy.prototype.movedown = function () {
    var moveTo = new THREE.Vector3(
        this.position.x,
        -2 + this.position.y,
        this.graphic.position.z
    );

    this.position = moveTo;
    this.graphic.position.x = this.position.x;
    this.graphic.position.y = this.position.y;
};