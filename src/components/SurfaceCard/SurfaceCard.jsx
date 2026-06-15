import './SurfaceCard.css';

export default function SurfaceCard() {
  return (
    <article className="surface-card">
      <h3 className="card-title">Surface tokens</h3>
      <p className="card-body">
        Cards use Tailwind <code className="inline-code">dark:</code> variants.
        Inline script in <code className="inline-code">index.html</code> applies
        the correct class before paint.
      </p>
    </article>
  );
}
