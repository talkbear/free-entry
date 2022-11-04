# auto fetch all assets downloaded from the vecteezy
mkdir public_temp
mv vecteezy-*.zip /public_temp
unzip public_temp/vecteezy-*.zip -d public_temp
find . -name 'public_temp/*.{jpg,png}' | gawk 'BEGIN{ a=1 }{ printf "mv \"%s\" public/vecteezy-%04d.jpg\n", $0, a++ }' | bash
rm -rf public_temp

