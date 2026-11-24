(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  requestAnimationFrame(() => document.body.classList.add('ready'));

  const targets = document.querySelectorAll('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach((el) => io.observe(el));
  }

  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const root = document.documentElement;
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cur-dot';
    ring.className = 'cur-ring';
    document.body.append(ring, dot);
    root.classList.add('cursor-on');

    let x = 0, y = 0, rx = 0, ry = 0, raf = 0, seen = false;

    const frame = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.1 ? requestAnimationFrame(frame) : 0;
    };

    addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return;
      x = e.clientX;
      y = e.clientY;
      if (!seen) { seen = true; rx = x; ry = y; }
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      root.classList.add('cursor-in');
      root.classList.toggle('cursor-hover', !!(e.target.closest && e.target.closest('a, button')));
      if (!raf) raf = requestAnimationFrame(frame);
    }, { passive: true });

    document.addEventListener('pointerleave', () => root.classList.remove('cursor-in'));
    addEventListener('blur', () => root.classList.remove('cursor-in'));
  }

  const html = document.documentElement;
  let leaving = false;

  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[data-go]');
    if (!a || leaving || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (reduce || !document.body.animate) return;
    e.preventDefault();
    leaving = true;
    const dark = a.dataset.go === 'dark';
    const wipe = document.createElement('div');
    wipe.className = 'wipe';
    wipe.style.background = dark ? '#000' : '#fff';
    document.body.append(wipe);
    html.classList.add(dark ? 'wipe-dark' : 'wipe-light');
    const done = () => { location.href = a.href; };
    const anim = wipe.animate(
      [{ clipPath: 'circle(0px at 0 0)' }, { clipPath: 'circle(150vmax at 0 0)' }],
      { duration: 820, easing: 'cubic-bezier(.65, 0, .25, 1)', fill: 'forwards' }
    );
    anim.finished.then(done, done);
  });

  addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    leaving = false;
    document.querySelectorAll('.wipe').forEach((n) => n.remove());
    html.classList.remove('wipe-dark', 'wipe-light');
  });

  const spies = document.querySelectorAll('[data-spy]');
  const side = document.querySelector('.p-side');
  if (spies.length && side && 'IntersectionObserver' in window) {
    const links = new Map([...side.querySelectorAll('a')].map((l) => [l.getAttribute('href').slice(1), l]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) => l.classList.remove('on'));
        const l = links.get(en.target.id);
        if (l) l.classList.add('on');
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    spies.forEach((s) => spy.observe(s));
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
      .then((regs) => regs.forEach((r) => r.unregister()))
      .catch(() => {});
  }
})();
