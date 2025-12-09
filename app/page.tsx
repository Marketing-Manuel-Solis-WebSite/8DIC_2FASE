'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Phone, ShieldCheck, Volume2, VolumeX } from 'lucide-react';

const PHONE_NUMBER = "+1 (346) 522 3259";
const PHONE_LINK = "tel:+13465223259";
const PRIMARY_COLOR = '#B2904D';
const HOME_URL = "https://manuelsolis.com"; 

export default function LandingPage() {
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  // CORRECCIÓN AQUÍ: Agregamos <HTMLVideoElement> para evitar el error de build
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoExpanded(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '13px', 
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    lineHeight: '1.2',
    minHeight: '32px', 
    display: 'flex',
    alignItems: 'flex-end', 
    justifyContent: 'center'
  };

  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#002342',
      overflow: 'hidden' 
    }}>
      
      {/* HEADER */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: PRIMARY_COLOR,
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <div style={{ 
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '20px 16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <a 
            href={HOME_URL}
            style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
          > 
            <img
              src="/logo-manuel-solis.png"
              alt="Logo Manuel Solis"
              style={{
                height: '56px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            />
          </a>
        </div>
      </header>

      {/* FONDO DECORATIVO */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '80px',
          right: '-10%',
          width: '300px',
          height: '300px',
          backgroundColor: PRIMARY_COLOR,
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.2
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          backgroundColor: '#10b981',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.1
        }}></div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '120px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingBottom: '80px', 
        minHeight: '100vh',
        overflowY: 'auto' 
      }}>
        
        <h1 style={{
          textAlign: 'center',
          marginTop: '20px',
          marginBottom: '30px',
          maxWidth: '90%',
          background: 'linear-gradient(to bottom, #ffffff 0%, #B2904D 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))',
          fontSize: '28px',
          fontWeight: '800',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          lineHeight: '1.2'
        }}>
          Manuel Solis Abogados de inmigración y accidentes
        </h1>

        {/* CONTENEDOR DE VIDEO */}
        <div style={{
          width: '100%',
          maxWidth: '1150px',
          marginBottom: '80px',
          opacity: videoExpanded ? 1 : 0,
          transform: videoExpanded ? 'scale(1)' : 'scale(0.95)', 
          transition: 'all 1s ease-out',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '56.25%', // Aspect Ratio 16:9
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: '#000',
            boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 0 2px rgba(178,144,77,0.5), 0 0 80px rgba(178,144,77,0.3)'
          }}>
            <video 
              ref={videoRef}
              src="https://vz-9f852395-0ee.b-cdn.net/d03226cf-0cc4-4ac9-a5ab-b17eb436d792/playlist.m3u8" 
              autoPlay 
              loop 
              muted={true} 
              playsInline
              controls={false}
              style={{
                border: '0',
                position: 'absolute',
                top: 0,
                left: 0, 
                height: '100%', 
                width: '100%',
                objectFit: 'cover'
              }} 
            >
              Su navegador no soporta el tag de video.
            </video>

            {/* BOTÓN DE AUDIO */}
            <button
              onClick={toggleAudio}
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                zIndex: 60,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(4px)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = PRIMARY_COLOR;
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {isMuted ? (
                <VolumeX color="white" size={24} />
              ) : (
                <Volume2 color="white" size={24} />
              )}
            </button>

          </div>
        </div>

        {/* BOTONES */}
        <div style={{
          width: '100%',
          maxWidth: '850px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '30px',
          opacity: videoExpanded ? 1 : 0,
          transform: videoExpanded ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease-out 0.5s'
        }}>
          
          {/* BOTÓN LLAMADA */}
          <a 
            href={PHONE_LINK}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              gap: '12px'
            }}
          >
            <div style={{
              position: 'relative',
              width: '80px', 
              height: '80px', 
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.5)',
              border: '3px solid rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Phone style={{ color: 'white', width: '36px', height: '36px' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={labelStyle}>
                Llámanos
              </span>
              <span style={{
                fontSize: '16px',
                fontWeight: '900',
                color: 'white',
                letterSpacing: '-0.5px'
              }}>{PHONE_NUMBER}</span>
            </div>
          </a>

          {/* BOTÓN OPCIONES LEGALES */}
          <button 
            onClick={() => console.log('Opciones legales')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <div className="glass-gold" style={{
              position: 'relative',
              width: '80px', 
              height: '80px', 
              borderRadius: '50%',
              border: '3px solid rgba(178, 144, 77, 0.5)',
              boxShadow: '0 10px 30px rgba(178, 144, 77, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.backgroundColor = 'rgba(178, 144, 77, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'rgba(178, 144, 77, 0.25)';
            }}
            >
              <ShieldCheck style={{ width: '36px', height: '36px', color: '#B2904D' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <span style={labelStyle}>
                  Opciones<br/>Legales
                </span>
                
                <span style={{
                    fontSize: '16px',
                    fontWeight: '900',
                    color: 'transparent',
                    letterSpacing: '-0.5px',
                    userSelect: 'none' 
                }}>{PHONE_NUMBER}</span>
            </div>
          </button>

        </div>
      </div>

    </div>
  );
}