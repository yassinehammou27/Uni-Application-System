# FiveHeads Prototyp

## Development

Um das Entwicklungs-Deployment vorzubereiten muss Folgendes installiert sein: 
* [Docker](https://www.docker.com/)
* [NodeJS](https://nodejs.org/en/)

Nach der Installation können Sie den Datenbankserver bei laufendem Docker mit `docker-compose up -d` im Hauptverzeichnis des Projekts starten, wodurch die Datenbank im abgekoppelten Modus gestartet wird. Beim ersten Start lädt Docker das erforderliche Postgres-Container-Image herunter und baut den benutzerdefinierten Container anschließend auf.
Um den Docker-Container zu stoppen, führen Sie `docker-compose down` im gleichen Verzeichnis aus.

Die Datenbankdaten werden im Verzeichnis `db/data/` gespeichert. Um die gesamte Datenbank zurückzusetzen, löschen Sie einfach das Verzeichnis `data` und erstellen Sie den Docker-db-Container neu.


## Production

```bash
mv docker-compose.yml docker-compose-dev.yml
mv docker-compose-prod.yml docker-compose.yml
docker-compose up -d
```

Docker wird die Images der Postgres- und Node-Container herunterladen und die Container anschließend anpassen und bereitstellen. Nach einem erfolgreichen Start sollte Ihre Anwendung unter folgender Adresse verfügbar sein: [localhost:3000](http://localhost:3000)


## Bewerberkonto anlegen

Rufen Sie die `/register`-Seite auf und folgen Sie den Schritten der Registrierung. Sie werden anfangs aufgefordert, eine E-Mail-Adresse und ein Passwort einzugeben. Auf der darauffolgenden Seite können Sie zusätzliche, für die Bewerbung notwendige Informationen angeben.


## Mitarbeiterkonto erstellen

Legen Sie über das Registrierungsformular einen neuen Nutzer an. Nach Eingabe der E-Mail-Adresse und des Passworts können Sie die Registrierung unterbrechen und den folgenden Codeschnipsel ausführen, um den neu angelegten Nutzer zu einem Mitarbeiterkonto zu machen:


```bash
docker exec -it db psql -d uzk-info -U uzk-admin
```

Anschließend öffnet sich ein Eingabefenster für das Ausführen von SQL-Queries innerhalb von PostgreSQL. Hier muss eingegeben werden:
`UPDATE users SET is_student=0 WHERE email='mail@example.com';`
Die E-Mail-Adresse müssen Sie hierbei durch die von Ihnen bei der Registrierung gewählten E-Mail-Adresse ersetzen.

Sie können innerhalb des Browsers auf `Login` klicken und werden dann auf die Seite `/profile` weitergeleitet, von wo aus Sie zur Übersicht der Studierenden gelangen.


## Bewerber einsehen und zulassen bzw. ablehnen

Wenn Sie sich mit einem Mitarbeiterkonto eingeloggt haben, erreichen Sie auf der Seite `/student/overview` eine Übersicht aller Bewerber. Erste relevante Daten der jeweiligen Bewerber können Sie hier direkt einsehen. Über den Link `Zum Profil` eines Tabelleneintrags erreichen Sie die Profilseite des dazugehörigen Bewerbers. Hier lässt sich der jeweilige Bewerber durch einen Klick auf `Zulassen` oder `Ablehnen` über das Ergebnis des Zulassungsverfahren informieren.


## Empfehlungsschreiben einreichen

Rufen Sie die `/referral`-Seite auf. Sie werden anschließend darum gebeten, die E-Mail-Adresse des Bewerbers anzugeben, für den Sie ein Empfehlungsschreiben einreichen möchten. Der Bewerber muss sich noch nicht registriert haben.
Darüber hinaus wird Ihre eigene E-Mail-Adresse sowie der Inhalt des Empfehlungsschreiben benötigt. Mit einem Klick auf `Absenden` reichen Sie Ihr Empfehlungsschreiben ein.


# Hausaufgabe 3

## Traefik Edge Router
Der Traefik Edge Router wird als Reverseproxy verwendet, der alle eingehenden Anfragen an die Frontenddienste entgegennimmt. Die Services werden durch eine Integration mit dem Docker Socket von Traefik automatisch erkannt und die IPs der Services werden zwischengespeichert. 
Die aktuell gefundenen Dienste die Traefik hält kann man sich unter `localhost:8080` ansehen. Traefik ist außerdem eine Lösung die es ermöglicht mit wenig Aufwand einen Loadbalancer im Round Robin Design vor die Services zu schalten. 

Alle Dienste die von außen erreichbar sein sollen müssen in den `docker-compose.yml` Dateien ein Label erhalten, damit Traefik dafür eine Route erstellt:
```yml
  labels:
      - "traefik.http.routers.<APP_NAME>.rule=Host(`<APP_NAME>.colasloth.com`)"
```

Die Kommunikation der Dienste untereinander sollte weiterhin über Docker Networks abgewickelt werden. Bspw. Bewerbungsportalapplikation zusammen mit der dazugehörigen Datenbank. Die Datenbank sollte aus Sicherheitsgründen nicht von außen erreichbar sein.
## Colasloth Domain
Weitere Informationen zur `colasloth.com` Domain finden sich hier: [Colasloth](https://colasloth.github.io/)

## API Microservice-Empfehlungsportal

Auf das Empfehlungsportal kann über HTTP-Request zugegriffen werden. Über den Pfad `/search/:email`, lassen sich die Empfehlungsschreiben eines Bewerbers aus der Datenbank des Empfehlungsportal ziehen. Diese werden in einem JSON-Format zurückgegeben. Bei einem HTTP-Request muss die Email-Adresse als Pfadparameter angegebn werden, über welchen die entsprechende Datenbankabfrage erfolgt. 
Über die Pfad `/referral` kann man letztlich auf das Empfehlungsport zugreifen. Hierbei wird das entsprechende Template gerendert. 
Über den Pfad `/` wird zu dem in einem JSON-Format wiedergegeben, um welchen Microservice es sich handelt. 