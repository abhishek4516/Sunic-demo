import { useEffect, useRef } from "react";

export default function CursorTrail() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    const ctx =
      canvas.getContext("2d");

    let mouseMoved = false;

    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
    };

    const params = {
      pointsNumber: 35,
      widthFactor: 0.30,
      spring: 0.35,
      friction: 0.5,
    };

    const trail =
      new Array(params.pointsNumber);

    for (let i = 0; i < trail.length; i++) {

      trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
      };
    }

    const updateMousePosition =
      (x, y) => {

        pointer.x = x;
        pointer.y = y;
      };

    window.addEventListener(
      "mousemove",
      (e) => {

        mouseMoved = true;
const rect =
  canvas.getBoundingClientRect();

updateMousePosition(
  e.clientX - rect.left,
  e.clientY - rect.top
);
      }
    );

    function setupCanvas() {

      canvas.width =
        window.innerWidth;

      canvas.height =
        window.innerHeight;
    }

    function update(t) {

      if (!mouseMoved) {

        pointer.x =
          (
            0.5 +
            0.2 *
            Math.cos(0.002 * t)
          ) * window.innerWidth;

        pointer.y =
          (
            0.5 +
            0.1 *
            Math.sin(0.003 * t)
          ) * window.innerHeight;
      }

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      trail.forEach((p, index) => {

        const prev =
          index === 0
            ? pointer
            : trail[index - 1];

        const spring =
          index === 0
            ? 0.4 * params.spring
            : params.spring;

        p.dx +=
          (prev.x - p.x) * spring;

        p.dy +=
          (prev.y - p.y) * spring;

        p.dx *= params.friction;

        p.dy *= params.friction;

        p.x += p.dx;

        p.y += p.dy;
      });

      ctx.beginPath();

      ctx.moveTo(
        trail[0].x,
        trail[0].y
      );

      for (
        let i = 1;
        i < trail.length - 1;
        i++
      ) {

        const xc =
          0.5 *
          (
            trail[i].x +
            trail[i + 1].x
          );

        const yc =
          0.5 *
          (
            trail[i].y +
            trail[i + 1].y
          );

        ctx.quadraticCurveTo(
          trail[i].x,
          trail[i].y,
          xc,
          yc
        );

        ctx.lineWidth =
          params.widthFactor *
          (
            params.pointsNumber - i
          );

        ctx.strokeStyle =
          "rgba(201,48,48,0.22)";

        ctx.stroke();
      }

      requestAnimationFrame(update);
    }

    setupCanvas();

    update(0);

    window.addEventListener(
      "resize",
      setupCanvas
    );

    return () => {

      window.removeEventListener(
        "resize",
        setupCanvas
      );
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-trail"
    />
  );
}