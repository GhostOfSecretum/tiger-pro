/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle */

const TIGER_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bg": "black",
  "accent": "amber",
  "cards": "glass",
  "motion": false
}/*EDITMODE-END*/;

function TigerTweaks() {
  const [t, setTweak] = useTweaks(TIGER_DEFAULTS);
  const root = document.documentElement;

  React.useEffect(() => { root.setAttribute('data-bg', t.bg); }, [t.bg]);
  React.useEffect(() => { root.setAttribute('data-accent', t.accent); }, [t.accent]);
  React.useEffect(() => { root.setAttribute('data-cards', t.cards); }, [t.cards]);
  React.useEffect(() => { root.setAttribute('data-motion', t.motion ? 'on' : 'off'); }, [t.motion]);

  return (
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

      <TweakSection label="Движение" />
      <TweakToggle label="Появление при скролле" value={t.motion}
        onChange={(v) => setTweak('motion', v)} />
    </TweaksPanel>
  );
}

const tweakMount = document.createElement('div');
document.body.appendChild(tweakMount);
ReactDOM.createRoot(tweakMount).render(<TigerTweaks />);
