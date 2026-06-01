#!/usr/bin/env bash
#
# migrar-a-P-gina-ASI.sh
# Copia la página de prevención al repositorio benjaandresar-beep/P-gina-ASI.
#
# Uso:
#   bash migrar-a-P-gina-ASI.sh
#
# Requisitos: git con acceso (HTTPS o SSH) al repo P-gina-ASI.
# Ejecútalo DESDE la carpeta que contiene index.html, styles.css y script.js.

set -euo pipefail

REPO_URL="https://github.com/benjaandresar-beep/P-gina-ASI.git"
RAMA="main"
TMP="$(mktemp -d)"
ARCHIVOS=(index.html styles.css script.js pagina-asi.html README.md)

echo "→ Clonando $REPO_URL ..."
git clone "$REPO_URL" "$TMP/repo"

echo "→ Copiando archivos ..."
for f in "${ARCHIVOS[@]}"; do
  if [[ -f "$f" ]]; then
    cp "$f" "$TMP/repo/"
    echo "   ✓ $f"
  else
    echo "   ⚠ no encontrado: $f (se omite)"
  fi
done

cd "$TMP/repo"
git checkout "$RAMA" 2>/dev/null || git checkout -b "$RAMA"
git add -A

if git diff --cached --quiet; then
  echo "→ No hay cambios que confirmar. Nada que hacer."
  exit 0
fi

git commit -m "Añadir página interactiva de prevención del abuso sexual infantil (semáforo del cuerpo)"
echo "→ Subiendo a $RAMA ..."
git push origin "$RAMA"

echo "✅ Listo. Archivos publicados en P-gina-ASI ($RAMA)."
echo "   Carpeta temporal: $TMP/repo"
