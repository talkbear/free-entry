# auto fetch all assets downloaded from the vecteezy
mkdir public_temp
mv ~/Downloads/vecteezy_*.zip public_temp/
unzip -n 'public_temp/*' -d public_temp/
find public_temp -name '*.jpg' | gawk 'BEGIN{ a=1 }{ printf "mv \"%s\" public/vecteezy-%04d.jpg\n", $0, a++ }' | bash
rm -rf public_temp

