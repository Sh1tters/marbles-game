function startGame() {
    const engine = Matter.Engine.create();
    const world = engine.world;
  
    setupPhysics(world);
    createPlayer(world);
  
    const render = createRenderer(engine);

    createObstacles(world);
  
    // Start game loop
    Matter.Engine.run(engine);
    Matter.Render.run(render);
  }
  
  function setupPhysics(world) {
    // Set gravity
    world.gravity.y = 1;

    // Create borders
    createBorders(world);
  }
  
  function createBorders(world) {
    // Create borders
    const borderThickness = 50;
    const borderTop = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      -borderThickness / 2,
      window.innerWidth + borderThickness,
      borderThickness,
      { isStatic: true }
    );
    const borderBottom = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + borderThickness / 2,
      window.innerWidth + borderThickness,
      borderThickness,
      { isStatic: true }
    );
    const borderLeft = Matter.Bodies.rectangle(
      -borderThickness / 2,
      window.innerHeight / 2,
      borderThickness,
      window.innerHeight + borderThickness,
      { isStatic: true }
    );
    const borderRight = Matter.Bodies.rectangle(
      window.innerWidth + borderThickness / 2,
      window.innerHeight / 2,
      borderThickness,
      window.innerHeight + borderThickness,
      { isStatic: true }
    );
  
    // Add borders to world
    Matter.World.add(world, [borderTop, borderBottom, borderLeft, borderRight]);
  }

  function createRenderer(engine) {
    // Set up renderer
    return Matter.Render.create({
      element: document.getElementById('game-screen'),
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
      },
    });
  }
  
  startGame();