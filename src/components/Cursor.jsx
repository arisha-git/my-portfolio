import { useEffect, useRef } from "react"

export default function Cursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX
      const y = e.clientY

      // Outer circle follows with a slight lag
      cursorRef.current.animate(
        { left: `${x}px`, top: `${y}px` },
        { duration: 80, fill: "forwards" }
      )

      // Inner dot follows instantly
      dotRef.current.animate(
        { left: `${x}px`, top: `${y}px` },
        { duration: 0, fill: "forwards" }
      )
    }

    const grow = () => {
      cursorRef.current.style.transform = "translate(-50%, -50%) scale(1.8)"
      cursorRef.current.style.borderColor = "#a78bfa"
      cursorRef.current.style.backgroundColor = "rgba(124, 58, 237, 0.08)"
    }

    const shrink = () => {
      cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)"
      cursorRef.current.style.borderColor = "#7C3AED"
      cursorRef.current.style.backgroundColor = "transparent"
    }

    window.addEventListener("mousemove", move)

    const interactables = document.querySelectorAll("a, button")
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", grow)
      el.addEventListener("mouseleave", shrink)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", grow)
        el.removeEventListener("mouseleave", shrink)
      })
    }
  }, [])

  return (
    <>
      {/* Outer circle */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid #7C3AED",
          backgroundColor: "transparent",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: "#a78bfa",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  )
}