# XSD-FORM-EDITOR

## Init 

```sh
apt install default-jre   
```

## Run

`xsltproc -o index.html xsd2html2xml.xsl ./empires.xsd`

Convert XSD to PO mapping

```sh
docker run --rm -v "$PWD":/jsonix/ -w /jsonix adoptopenjdk/openjdk8 java -jar ./jsonix-schema-compiler-full-2.3.9.jar "./empires.xsd"
```

Convert XSD to Json Schema

```sh
docker run --rm -v "$PWD":/jsonix/ -w /jsonix adoptopenjdk/openjdk8 java -jar ./jsonix-schema-compiler-full-2.3.9.jar -generateJsonSchema "./empires.xsd"
```