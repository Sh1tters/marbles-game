const createPlayer = (world) => {
    // Create player object
    const player = {
      x: 50,
      y: 50,
      radius: 20,
      color: '#fff',
    };
  
    // Add player to Matter.js world
    Matter.World.add(world, [
      Matter.Bodies.circle(player.x, player.y, player.radius, {
        isStatic: false,
        mass: 0.5,
        friction: 0.001,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: player.color,
        },
      }),
    ]);
  };