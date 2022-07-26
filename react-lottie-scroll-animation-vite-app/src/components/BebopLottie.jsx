import {css, cx} from '@emotion/css';
import animationData from '../lotties/77-im-thirsty.json';
import lottie from 'lottie-web/build/player/lottie';
import {useCallback, useEffect, useLayoutEffect, useMemo, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const BebopLottie = () => {
  const instanceRef = useRef(null);
  const itemDomRef = useRef(null);
  const lottieDomRef = useRef(null);
  useLayoutEffect(() => {
    // https://github.com/airbnb/lottie-web/wiki/Renderer-Settings
    let instance = null;
    if (window.matchMedia('(max-width: 768px)').matches) {
      instance = lottie.loadAnimation({
        rendererSettings: {
          className: css`
            width: calc(100% + 200px) !important;
            height: 100%;
            transform: translate3d(-110px, 0px, 0px) !important;
            content-visibility: visible;
          `,
        },
        container: lottieDomRef.current,
        renderer: 'svg',
        // renderer: 'canvas',
        // animationData,
        loop: false,
        autoplay: false,
        path: `https://assets10.lottiefiles.com/packages/lf20_w0cYJr.json`,
      });
      instanceRef.current = instance;
    } else {
      instance = lottie.loadAnimation({
        rendererSettings: {},
        container: lottieDomRef.current,
        renderer: 'canvas',
        animationData,
        loop: false,
        autoplay: false,
        // path: `https://assets10.lottiefiles.com/packages/lf20_w0cYJr.json`,
      });
      instanceRef.current = instance;
    }
    return () => {
      if (instance) {
        instance.destroy();
      }
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const itemDom = itemDomRef.current;
    // https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.matchMedia()
    ScrollTrigger.matchMedia({
      '(min-width: 769px)': function () {
        gsap.timeline({
          scrollTrigger: {
            trigger: itemDom,
            start: 'top 10%',
            end: 'bottom+=300% top',
            pin: true,
            markers: true,
            scrub: true,
            onUpdate: function (e) {
              const instance = instanceRef.current;
              const maxFrames = instance.totalFrames;
              const p = e.progress;
              const frame = maxFrames * p;
              // console.log(frame, maxFrames, p);
              instance.goToAndStop(frame, true);
            },
          },
        });
      },

      '(max-width: 768px)': function () {
        gsap.timeline({
          scrollTrigger: {
            trigger: itemDom,
            start: 'top 20%',
            end: 'bottom+=900% top',
            pin: true,
            markers: true,
            scrub: true,
            onUpdate: function (e) {
              const instance = instanceRef.current;
              const maxFrames = instance.totalFrames;
              const p = e.progress;
              const frame = maxFrames * p;
              // console.log(frame, maxFrames, p);
              instance.goToAndStop(frame, true);
            },
          },
        });
      },
    });

    return () => {};
  }, []);

  return (
    <div
      className={css`
        width: 100%;
        min-height: 300vh;
      `}
    >
      <div
        ref={itemDomRef}
        className={cx(
          css`
            width: 100%;
            height: 100%;
            border: 1px solid;
            overflow: hidden;
          `,
          ``
        )}
      >
        <div
          ref={lottieDomRef}
          className={cx(
            css`
              width: 100%;
            `,
            ``
          )}
        />
      </div>
    </div>
  );
};

export {BebopLottie};
