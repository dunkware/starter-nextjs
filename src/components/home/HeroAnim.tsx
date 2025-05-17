'use client';
import React, { useEffect, useState } from 'react';
import {
  User, Cloud, Bot, Brain, Users,
  Workflow, Sparkles, Shield, Book
} from 'lucide-react';

const HeroAnim = () => {
  const [nodesRotation, setNodesRotation] = useState(0);
  const [activeNode, setActiveNode] = useState(0);
  const [connections, setConnections] = useState<any[]>([]);

  const nodes = [
    { icon: Bot, label: 'AI Agent', angle: 0 },
    { icon: Brain, label: 'Memory Agent', angle: 45 },
    { icon: Workflow, label: 'Orchestrator', angle: 90 },
    { icon: Sparkles, label: 'Generator', angle: 135 },
    { icon: User, label: 'Customer', angle: 180 },
    { icon: Users, label: 'Team', angle: 225 },
    { icon: Shield, label: 'Moderator', angle: 270 },
    { icon: Book, label: 'Subject Expert', angle: 315 }
  ];

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setNodesRotation(prev => (prev + 0.3) % 360);
    }, 50);

    const nodeInterval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % nodes.length);
    }, 2000);

    const connectionInterval = setInterval(() => {
      const sourceIndex = Math.floor(Math.random() * nodes.length);
      let targetIndex;
      do {
        targetIndex = Math.floor(Math.random() * nodes.length);
      } while (targetIndex === sourceIndex);

      const newConnection = {
        source: sourceIndex,
        target: targetIndex,
        id: Date.now(),
        opacity: 1,
      };

      setConnections(prev => [...prev, newConnection]);

      setTimeout(() => {
        setConnections(prev => prev.filter(conn => conn.id !== newConnection.id));
      }, 2000);
    }, 1500);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(nodeInterval);
      clearInterval(connectionInterval);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center  overflow-hidden">
      {/* Background */}
      <div className="absolute w-full h-full z-0" />

      {/* Outer Blur Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-blue-500/5 blur-3xl z-0" />

      {/* Nodes and Main Circle */}
      <div className="relative w-96 h-96 rounded-full border border-blue-500/30 z-10">
        {nodes.map((node, index) => {
          const NodeIcon = node.icon;
          const nodeAngle = node.angle + nodesRotation;
          const x = Math.cos(nodeAngle * Math.PI / 180) * 180;
          const y = Math.sin(nodeAngle * Math.PI / 180) * 180;
          const isActive = index === activeNode;

          return (
            <div
              key={index}
              className={`absolute flex flex-col items-center transition-all duration-500 ease-in-out ${isActive ? 'scale-125' : 'scale-100'}`}
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                filter: isActive ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))' : 'none'
              }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border border-blue-400/30 ${isActive ? 'bg-blue-600' : 'bg-gray-800'}`}>
                <NodeIcon size={24} className={isActive ? 'text-white' : 'text-blue-400'} />
              </div>
              <span className={`mt-2 text-xs font-medium ${isActive ? 'text-blue-400' : 'text-gray-400'}`}>
                {node.label}
              </span>
            </div>
          );
        })}

        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full z-0">
          {connections.map((connection) => {
            const sourceAngle = nodes[connection.source].angle + nodesRotation;
            const targetAngle = nodes[connection.target].angle + nodesRotation;
            const sourceX = 192 + Math.cos(sourceAngle * Math.PI / 180) * 180;
            const sourceY = 192 + Math.sin(sourceAngle * Math.PI / 180) * 180;
            const targetX = 192 + Math.cos(targetAngle * Math.PI / 180) * 180;
            const targetY = 192 + Math.sin(targetAngle * Math.PI / 180) * 180;
            return (
              <g key={connection.id}>
                <circle cx={sourceX} cy={sourceY} r="4" fill="rgba(34, 197, 94, 0.6)" />
                <circle cx={targetX} cy={targetY} r="4" fill="rgba(34, 197, 94, 0.6)" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Center Logo */}
      <div className="absolute flex flex-col items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 border border-orange-300/50 shadow-lg z-20">
        <Cloud size={28} className="text-white mb-1" />
        <div className="text-center">
          <div className="font-bold text-white">Dunkware</div>
          <div className="text-xs text-orange-200">Cloud</div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 3 + 1;
        const xPos = (Math.random() - 0.5) * 600;
        const yPos = (Math.random() - 0.5) * 600;
        const delay = Math.random() * 5;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/30 animate-[float_12s_ease-in-out_infinite]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: '50%',
              left: '50%',
              transform: `translate(${xPos}px, ${yPos}px)`,
              animationDelay: `${delay}s`
            }}
          />
        );
      })}
    </div>
  );
};

export default HeroAnim;
