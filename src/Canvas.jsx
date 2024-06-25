import React, { useEffect, useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';


const Canvas = ({ name, message, color }) => {
  const [stageWidth, setStageWidth] = useState(window.innerWidth / 2);
  const [stageHeight, setStageHeight] = useState(window.innerHeight - 190);
  
  useEffect(() => {
    const handleResize = () => {
      setStageWidth(window.innerWidth);
      setStageHeight(window.innerHeight - 120);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [stageWidth,stageHeight]);

  // Calculate position and size of the inner rectangle to center it
  const rectWidth = Math.min(700, stageWidth - 100); // Maximum width of 700 or less if screen size is smaller
  const rectHeight = Math.min(300, stageHeight - 100); // Maximum height of 300 or less if screen size is smaller
  const rectX = (stageWidth - rectWidth) / 2;
  const rectY = (stageHeight - rectHeight) / 2;

  return (
    <div>
     
      <div className="w-full md:w-3/4 sm:w-1/2 h-3/4 mt-10 ml-4 p-4 bg-gray-500 rounded-lg flex justify-center">
        <Stage width={stageWidth} height={stageHeight}>
          <Layer>
            {/* Background rectangle with shadow */}
            <Rect
              x={rectX}
              y={rectY}
              width={rectWidth}
              height={rectHeight}
              fill={color.Background || '#1e1e1e'}
              cornerRadius={10}
              shadowBlur={10}
              shadowColor="black"
              shadowOpacity={0.6}
              shadowOffset={{ x: 10, y: 10 }}
            />
            {/* Text */}
            <Text
              x={rectX + 20} // Adjusted x position for text inside the rectangle
              y={rectY + 20} // Adjusted y position for text inside the rectangle
              text={name}
              fontSize={16}
              fontFamily="monospace"
              fill={color.Text || 'gray'}
              width={rectWidth - 40} // Adjusted width for text based on rectangle width
              height={rectHeight - 40}
              padding={10}
            />
            <Text
              x={rectX + 20} // Adjusted x position for text inside the rectangle
              y={rectY + 50} // Adjusted y position for text inside the rectangle
              text={message}
              fontSize={16}
              fontFamily="monospace"
              fill={color.Text || 'gray'}
              width={rectWidth - 40} // Adjusted width for text based on rectangle width
              height={rectHeight - 40}
              padding={12}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Canvas;
