function createSlantedObstacle(x, y, width, height, angle) {
    return Matter.Bodies.rectangle(x, y, width, height, {
      isStatic: true,
      frictionAir: 0.001,
      angle: angle,
    });
  }

function createObstacles(world) {
    // Create slanted obstacles
    const obstacle1 = createSlantedObstacle(0, 100, 800, 20, Math.PI / 10);
    const obstacle2 = createSlantedObstacle(window.innerWidth, 300, 1400, 20, -Math.PI / 10);
  
    // Add obstacles to world
    Matter.World.add(world, [obstacle1, obstacle2]);
}