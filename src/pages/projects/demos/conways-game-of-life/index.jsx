import React, { useState, useEffect } from "react";
import "./styles.css";

import noise from "noisejs";

const gridSize_x = 64;
const gridSize_y = 64;

function generateInitialConfig(gridSize_x, gridSize_y) {
    const perlin = new noise.Noise(Math.random());
    const grid = Array.from({ length: gridSize_x }, (_, x) =>
      Array.from({ length: gridSize_y }, (_, y) => {
        const noiseValue = perlin.perlin2(x / 5, y / 5); // Adjust the divisor to control the noise pattern
        return noiseValue > 0.2; // Adjust the threshold to determine the initial state (alive or dead)
      })
    );
    return grid;
  }

const initialConfig = generateInitialConfig(gridSize_x, gridSize_y)
  
function TileGrid() {
  const [grid, setGrid] = useState(initialConfig);

  // Simulate Conway's Game of Life
  const simulateGameOfLife = () => {
    setGrid((prevGrid) => {
      return prevGrid.map((row, x) =>
        row.map((cell, y) => {
          const aliveNeighbors = getAliveNeighbors(x, y, prevGrid);
          if (cell) {
            // Cell is currently alive
            return aliveNeighbors === 2 || aliveNeighbors === 3;
          } else {
            // Cell is currently dead
            return aliveNeighbors === 3;
          }
        })
      );
    });
  };

  // Helper function to get the number of alive neighbors for a cell
  const getAliveNeighbors = (x, y, grid) => {
    let count = 0;
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx === 0 && dy === 0) continue;
        const neighborX = x + dx;
        const neighborY = y + dy;
        if (
          neighborX >= 0 &&
          neighborX < gridSize_x &&
          neighborY >= 0 &&
          neighborY < gridSize_y
        ) {
          count += grid[neighborX][neighborY] ? 1 : 0;
        }
      }
    }
    return count;
  };

  // Automatically simulate Game of Life every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(simulateGameOfLife, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="tile-grid">
      {grid.map((row, x) => (
        row.map((cell, y) => (
          <div
            key={`${x}-${y}`}
            className={`tile ${cell ? "alive" : "dead"}`}
          >
            {/* Display nothing inside the cell */}
          </div>
        ))
      ))}
    </div>
  );
}

export default TileGrid;
