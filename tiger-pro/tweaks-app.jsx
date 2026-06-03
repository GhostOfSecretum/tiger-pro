/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle */

const TIGER_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bg": "black",
  "accent": "white",
  "cards": "glass",
  "hero": "side",
  "motion": false
}/*EDITMODE-END*/;

function ThemeFab({ onClick }) {
  return (
    <button type="button" className="theme-fab" onClick={onClick} aria-label="Оформление" title="Оформление">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <span>Оформление</span>
    </button>
  );
}

function TigerTweaks() {
  const [t, setTweak] = useTweaks(TIGER_DEFAULTS);
  const root = document.documentElement;
  const openPanel = () => window.postMessage({ type: '__activate_edit_mode' }, '*');

  React.useEffect(() => { root.setAttribute('data-bg', t.bg); }, [t.bg]);
  React.useEffect(() => { root.setAttribute('data-accent', t.accent); }, [t.accent]);
  React.useEffect(() => { root.setAttribute('data-cards', t.cards); }, [t.cards]);
  React.useEffect(() => { root.setAttribute('data-hero', t.hero); }, [t.hero]);
  React.useEffect(() => { root.setAttribute('data-motion', t.motion ? 'on' : 'off'); }, [t.motion]);

  return (
    <>
    <ThemeFab onClick={openPanel} />
    <TweaksPanel title="Оформление">
      <TweakSection label="Фон" />
      <TweakRadio label="Тон" value={t.bg}
        options={[{label:'Чёрный',value:'black'},{label:'Уголь',value:'charcoal'},{label:'Графит',value:'graphite'}]}
        onChange={(v) => setTweak('bg', v)} />

      <TweakSection label="Акцент" />
      <TweakRadio label="Цвет" value={t.accent}
        options={[{label:'Белый',value:'white'},{label:'Сталь',value:'steel'},{label:'Янтарь',value:'amber'}]}
        onChange={(v) => setTweak('accent', v)} />

      <TweakSection label="Карточки" />
      <TweakRadio label="Стиль" value={t.cards}
        options={[{label:'Стекло',value:'glass'},{label:'Контур',value:'outline'},{label:'Заливка',value:'solid'}]}
        onChange={(v) => setTweak('cards', v)} />

      <TweakSection label="Герой" />
      <TweakRadio label="Тигр" value={t.hero}
        options={[{label:'Сбоку',value:'side'},{label:'Фоном',value:'watermark'}]}
        onChange={(v) => setTweak('hero', v)} />

      <TweakSection label="Движение" />
      <TweakToggle label="Появление при скролле" value={t.motion}
        onChange={(v) => setTweak('motion', v)} />
    </TweaksPanel>
    </>
  );
}

const tweakMount = document.createElement('div');
document.body.appendChild(tweakMount);
ReactDOM.createRoot(tweakMount).render(<TigerTweaks />);
