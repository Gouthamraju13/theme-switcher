import { memo, useRef } from 'react';
import './MemoizedPanel.css';

const MemoizedPanel = memo(function MemoizedPanel() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <article className="memo-panel">
      <h3 className="memo-title">Memoized panel</h3>
      <p className="memo-body">
        This card does <em>not</em> subscribe to theme context.
        Parent toggles should not thrash unrelated UI.
      </p>
      <p className="render-count">
        Render count (dev): {renderCount.current}
      </p>
    </article>
  );
});

export default MemoizedPanel;
