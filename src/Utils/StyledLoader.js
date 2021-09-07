import styled from 'styled-components'
export const StyledLoader = styled.div`
height: 100vh;
display: grid;
place-items: center;
.flipper {
            width: 100px;
            height: 100px;
            position: relative;
            perspective: 200px;
        }

        .flipper div {
            height: 50px;
            width: 50px;
            background: coral;
            position: absolute;
            animation: flip 2s infinite;
            transform-origin: right bottom;
        }

        .flipper div:nth-child(2) {
            animation-delay: 1s;
            opacity: 0.5;
        }

@keyframes flip {
            0% {
                transform: rotateX(0) rotateY(0)
            }

            25% {
                transform: rotateX(0) rotateY(180deg)
            }

            50% {
                transform: rotateX(180deg) rotateY(180deg)
            }

            75% {
                transform: rotateX(180deg) rotateY(0)
            }

            100% {
                transform: rotateX(0) rotateY(0)
            }
        }
`