# Studierenden Zulassungssystem Anforderungsdokument

# 1. Introduction
## 1.1 Document Purpose
The purpose of this document is to describe the requirements of an application completely, accurately and unambiguously in a technology-independent manner. All attempts have been made in using mostly business terminology and business language while describing the requirements in this document. Very minimal and commonly understood technical terminology is used. 

## 1.2 Intended Audience
The main intended audience for this document is the business owners of the proposed system. This document should be readable by business owners of the proposed system. They must be able to verify that the project requirements have been documented completely, accurately and unambiguously. 

Data Architects, Application Architects and Technical Architects would also find the information in this document useful when they need to design a solution that will address these requirements. 
	
Since the requirements are documented here in a technology-independent manner, the customers of the system should be able to comprehend the requirements fairly easily from this document. 
## 1.3 Client 
These requirements are a result of correspondence with [fill in name and role here].
## 1.4 Purpose of the Requirements
This section describes the purpose of the requirements.

* [ ] Requirements for major enhancements to an existing application.  
* [x] Requirements for new application development.  
* [ ] Requirements for replacement application development.  
* [ ] Requirements for a request for proposals (RFP).  
## 1.5 Goals/Objectives
The objectives for this system are to create a student admission system that enables productivity for all users. This will be achieved by ensuring that the system is easy to use for users of the system.

### Benefits/Rationale

The primary benefit of the system is to save stakeholder's time by ensuring accurate and useable tracking of applicant materials and decisions.
## 1.6 Stakeholders

### Professor\*in
Professor\*innen sind für die Auswahl geeigneter Kandidat\*innen aus der Menge der Bewerber\*innen zuständig. Sie wünschen sich ein System, das ebenso zuverlässig wie einfach zu bedienen ist.
Sie sind in den Einführungsprozess des Systems eng eingebunden und geben Feedback zum System direkt an Entscheidungsträger\*innen in der Organisation weiter. Sie können somit direkten Einfluss auf die Gestaltung und Funktionalität des Systems ausüben. Die Professor\*innen haben ein großes Interesse an dem System, da es die Arbeit während des Zulassungsprozesses maßgeblich bestimmt. Sie sind dem Projekt gegenüber positiv gestimmt, da sie sich eine Verbesserung in der Bearbeitung von Zulassungen vom System versprechen. Beeinflussbar sind die Professor\*innen im direkten Diskurs in Bezug auf ihre Anforderungen an das System.

### Mitarbeiter\*in des Lehrstuhls

Mitarbeiter\*innen der Lehrstühle sind für die Vorauswahl geeigneter Kandidat\*innen aus der Menge der Bewerber\*innen zuständig. Sie wünschen sich ein System, das ebenso zuverlässig wie einfach zu bedienen ist.
Die Mitarbeiter\*innen haben keinerlei Macht über das System, werden jedoch ggf. im Einführungsprozess um Feedback gebeten und können die Gestaltung und Funktionalität des Systems somit indirekt steuern. Die Mitarbeiter\*innen der Lehrstühle haben ein großes Interesse an dem System, da es die Arbeit während des Zulassungsprozesses maßgeblich bestimmt. Sie sind dem Projekt gegenüber positiv gestimmt, da sie sich eine Verbesserung in der Bearbeitung von Zulassungen vom System versprechen. Beeinflussbar sind die Mitarbeiter\*innen der Lehrstühle im direkten Diskurs in Bezug auf ihre Anforderungen an das System.

### Bewerber\*innen
#### Kurze Beschreibung 
Bei Bewerber\*innen handelt es sich um die personenstärkste Stakeholdergruppe. Sie sind aktive Nutzer\*innen des Bewerbungsportals und tragen die für ihre Zulassung relevanten Daten in das System ein. 

#### Interessen und Ziele
Bewerber\*innen sind insbesondere an der Benutzerfreundlichkeit, Zuverlässigkeit und Verfügbarkeit des Systems interessiert. Auch der Schutz Ihrer persönlichen Daten muss gewährleistet sein. Sie sind an einem einfach zu bedienenden System interessiert, welches sie ohne Errors oder Abstürze durch den Bewerbungsprozess führt. Das System sollte im Bewerbungszeitraum immer uneingeschränkt verfügbar sein, ihre Daten vollständig und korrekt übermitteln und dabei den neuesten Datenschutzstandards entsprechen.

#### Macht/Einfluss
Bewerber\*innen haben keine direkte Entscheidungsgewalt über das System. Allerdings sollte es der Universität daran liegen die Interessen ihrer Bewerber\*innen zu wahren und insbesondere ihre Rechte in der Umsetzung des Systems zu berücksichtigen. Insofern beeinflussen sie das System nur indirekt. Durch andere Stakeholder wie zum Beispiel die Fachschaft wäre es allerdings möglich auch direkten Einfluss auszuüben.


### Gesetzgeber
Der Gesetzgeber übt mittelbaren Einfluss auf das System aus, indem er rechtliche Rahmenbedingungen für die Datenverarbeitung im Systemkontext schafft und voraussetzt, dass der Zulassungsprozess diskriminierungsfrei durchgeführt wird. Er hat jedoch kein direktes Interesse am System, ist nicht beeinflussbar und steht dem Projekt neutral gegenüber. 

### Dekan\*in
Der / die Dekan\*in stellt die Leitung der Fakultät dar und ist der Auftraggeber des Systems. Er / sie ist an einem effizienten und reibungslosen Zulassungsprozess interessiert. Außerdem wünscht er / sie sich, dass der Bewerbungsprozess als unkompliziert empfunden wird und auf potentielle Kandidat\*innen keine abschreckende Wirkung hat. Als Auftraggeber\*in hat er / sie die Entscheidungshoheit über die konkrete Ausgestaltung des Systems und kann somit erheblichen Einfluss ausüben. Durch Verhandlungen der vertraglichen Rahmenbedingungen ist er / sie in seiner / ihrer Position als Stakeholder des Systems beeinflussbar. Der / die Dekan\*in ist dem Projekt gegenüber neutral gestimmt und hat nur geringes Interesse an dem Projekt, da er / sie nicht zu den Entnutzer\*innen zählen wird.

### Service Point
#### Kurze Beschreibung
Der Service Point ist die erste Anlaufstelle für Studenten und Bewerber\*innen bei Fragen zu ihrem Studium oder zu der Bewerbung. Sollten es also bei der Benutzung des Bewerbungsportals zu Unklarheiten und Fragen kommen, würde der Service Point kontaktiert werden. 
#### Interessen und Ziele 
Die Mitarbeiter\*innen des Service Points arbeiten nicht direkt mit dem System, aber sind indirekt stark davon betroffen. Sie interessiert es daher, dass das System möglichst verständlich ist für alle möglichen Bewerber\*innen. Dadurch wird der Arbeitsaufwand für sie möglichst geringgehalten. Sollte es dennoch Schwierigkeiten geben, müssten die Mitarbeiter\*innen das System gut genug kennen, um weiterhelfen zu können. Dafür wäre eine verständliche Dokumentation wichtig.
#### Macht / Einfluss
Die Mitarbeiter\*innen haben nur wenig Einfluss auf das System, da sie keine Entscheidungsgewalt innehaben und auch nicht direkt mit dem System arbeiten. Sie gelten so lange als extern, wie sie nicht mit dem System arbeiten. Wenn sie aber, um Bewerber\*innen zu helfen, mit auf das System zugriefen, werden sie zu Internen.
#### Einstellung zum Projekt
Sie sind dem Projekt gegenüber neutral eingestellt, solange es nicht zu kompliziert aufgebaut ist und sich die Mehrarbeit der Mitarbeiter\*innen stark erhöht. Dann ständen sie dem Projekt negativ gegenüber.

### Zulassungsausschuss
#### Kurze Beschreibung
Jede Universität legt unterschiedliche Kriterien für die Zulassung von Studenten\*innen für die jeweiligen Studiengänge fest. Bei der WiSo-Fakultät ist beispielsweise für die Erarbeitung dieser Richtlinien der Zulassungsausschuss zuständig. In diesem Gremium sind die verschiedenen Stellen der Universität, darunter auch die Studierendenschaft mit einem Mitglied, vertreten. Sie setzen sich zum einen dafür ein, dass die Zulassungskriterien für die Bewerber\*innen fair und transparent gestaltet sind. Zum anderen werden aber auch die Belange der Entscheidungsträger der Universität berücksichtigt. Wenn es also darum geht, Zulassungsvoraussetzungen für einen neuen Informatik-Studiengang zu erarbeiten, ist dafür der Zulassungsausschuss verantwortlich.
#### Interessen und Ziele
Bei der Umsetzung eines neuen Bewerbungsportals für diesen Studiengang sind die Mitglieder\*innen des Ausschusses sehr daran interessiert, dass die von ihnen erarbeiteten Daten auch erfasst werden und die Auswahl der Bewerber\*innen unbeeinflusst, fair und sicher ist.
#### Macht / Einfluss
Da der Zulassungsausschuss die Entscheidungsgewalt über den Auswahlprozess von Bewerber\*innen hat, haben sie großen Einfluss über die Gestaltung des Systems, die Daten die erfasst werden sollen und das Auswahlverfahren der BEwerber\*innen.
#### Einstellung zum Projekt
Sie sind positiv eingstellt, da ein anonymisiertes Bewerbungsverfahren, das mehr Eingaben als die Note berücksichtigt, fair ist.

### Systementwickler\*innen
#### Kurze Beschreibung 
Die Systementwickler*innen sind von besonderer Bedeutung, da Sie die Interessen sämtlicher Stakeholder erheben und berücksichtigen müssen, und in den Entwicklungsprozess mit einfließen lassen. Sie bauen das System und sind damit verantwortlich für viele Faktoren, die den Erfolg des Projektes bestimmen.

#### Interessen und Ziele
Für die Entwickler\*innen ist es wichtig, dass sowohl für sie selbst als auch für Administrator*innen die einfache Wartung des Systems gewährleistet ist. Dafür ist eine übersichtliche Codebase und eine gute, strukturierte Dokumentation notwendig. Es sollte auch die Möglichkeit bestehen, Erweiterungen/Updates ohne großen Aufwand beziehungsweise ohne umfangreiche Tests und Anpassungen einzuspielen. Dies kann auch für zukünftige Entwicklerteams wichtig sein. Weitere Interessen aus Sicht der Entwickler: generelle technologische Standards, anerkannte Tools und Methoden, gängige Schnittstellen.

#### Macht/Einfluss 
Dadurch dass die Entwickler\*innen den Herstellungsprozess des Systems maßgeblich verantworten haben sie eine hohe Machtposition. Sie handeln primär im Interesse ihrer Kunden - in diesem Falle der Universität - und beziehen die anderen Stakeholder mit ein. Mit dieser Verantwortung geht eine gewisse Macht einher. Einfluss kann insbesondere durch die Beratung der Stakeholder bezüglich Anforderungen und Gestaltung entstehen.


### (System-)Administratoren
#### Kurze Beschreibung
(System-)Administratoren sind im System diejenigen, die sich um den reibungslosen Betrieb des Gesamtsystems kümmern. Sie sind dafür da, dass Mitarbeiter, Bewerber und Empfehlungsschreiber die Plattform überhaupt nutzen können. Sie haben primär mit den Servern und Datenbanken zu tun und setzen sich mit der Instandhaltung dieser auseinander, sei es in Form von Updates oder Konfigurationen. Sie sind bei Problemen technischer Art diejenigen, die auf Fehlersuche gehen.
#### Interessen und Ziele
Für sie ist es also wichtig Vertrauen zur Hard- und Software haben zu können, um einschätzen zu können, welche Dinge unternommen werden müssen um die Bereitstellung der Dienste zu gewährleisten. Die (System-)Administratoren sind diejenigen, die vollen Zugriff auf das System haben. Außerdem ist es für sie wichtig zu wissen, wann Bewerbungsphasen sind, um möglicherweise Ressourcen vorzubereiten, damit eine Downtime durch zu viele Anfragen unterbunden werden kann.
#### Macht / Einfluss
Direkten Einfluss oder Macht haben sie dabei nicht, da sie nur für den Gesamtbetrieb zuständig sind. (System-)Administratoren könnten intern oder Partner sein, im Falle dieses Systems sollten sie intern sein, da es wahrscheinlich von einer der IT-Stellen der Universität betrieben wird (RRZK oder IT der Verwaltung). 
#### Einstellung zum Projekt
Dem System sind die (System-)Administratoren neutral gegenübereingestellt. Dies kann sich während des Betriebs des Systems ändern.

### Unterstützer
#### Kurze Beschreibung
Unterstützer\*innen wollen eine\*n Bewerber\*in unterstützen, indem sie ein Empfehlungsschreiben erstellen und zuordnen. Sie sind meist Dritte, die die/den Bewerber*in aus anderen Situationen wie der bspw. Schul- oder Arbeitsumfeld kennen und durch das Schreiben diese Person für das Studium empfehlen möchten.
#### Interessen und Ziele
Für sie ist es wichtig, dass das Schreiben oder Hochladen dieses Empfehlungsschreibens reibungslos und unkompliziert ist. Ziel für sie ist es einfach und schnell ihr Schreiben zu verfassen und einzusenden. 
#### Bedeutung für das System
Das System sollte ihnen eine klare Rückmeldung über das erfolgreiche oder fehlerhafte Einreichen des Empfehlungsschreibens geben, um Unklarheiten zu beseitigen. Im Gesamtsystem spielen die Unterstützer\*innen eine eher kleine Rolle. Nach dem Einreichen des Dokuments ist der Gesamtprozess für sie im System bereits erledigt.
Sie haben nur Zugriff auf die entsprechende Empfehlungsseite, haben sonst keine direkten Berührungspunkte mit dem System, sind dennoch aktive Akteuere im System.
#### Macht / Einfluss
Dadurch, dass sie nur meist externe Dritte sind, haben sie am System weder direkten Einfluss noch Macht. 
#### Einstellung zum Projekt
Unterstützer\*innen sind dem System gegenüber neutral eingestellt.

### Fachschaft
##### Kurze Beschreibung
Der Fachschaftsrat oder die Fachschaftsvertretung besteht aus Studierenden eines bestimmten Fachbereiches. Diese sind insbesondere dafür zuständig die Studierenden des entsprechenden Fachbereiches in unterschiedlichen Gremien und Ausschüssen der Universität zu vertreten. Sie versuchen dabei insbesondere die Interessen der Studierenden durchzusetzen. Dies zum Beispiel am Lehrstuhl und Institut, bei der Fakultät und im Dekanat.  Weiterhin stehen sie auch bei Fragen und Problemen einzelner Studierenden zur Verfügung.

##### Interessen und Ziele

Der Fachschaftsrat vertritt die Interessen der Studierenden. Bezogen auf das Zulassungssystem sind sie insbesondere daran interessiert, dass auch dort die Interessen der Studierenden vertreten werden. Sie sind beispielsweise daran interessiert, dass das die Vergabe von Studienplätzen möglichst fair abläuft. Eine mögliche Benachteiligung bestimmter Bewerber und Bewerbergruppen sollte somit ausgeschlossen werden.  Eine Benachteiligung von Bewerbern kann aufgrund der Herkunft, des Geschlechts und der Religion sowie durch das äußere Erscheinungsbild geschehen. 
Im Sinne der Interessen der angehenden Studierenden, sollte dies durch das entsprechende Zulassungssystem ausgeschlossen werden. Bezüglich der Herkunft bzw. Staatsbürgerschaft sollte diese keine Rolle bei der Auswahl der Bewerber spielen. Diese sollte entweder bei der Auswahl der Bewerber durch das Auswahlkomitee nicht ersichtlich sein oder erst gar nicht erfasst werden. Gleiches sollte auch bei dem Geschlecht sowie den Bewerbungsbildern gelten. Die Religion sollte nicht erfasst werden, da diese Information in keiner Weise von der Universität benötigt wird. 
Zudem sollte ein einziger Professor nicht dazu befugt sein alleine, ohne eine andere kontrollierende Instanz, darüber zu entscheiden ob ein einzelner Bewerber angenommen wird oder nicht. Damit soll gewährleistet werden, dass der Einfluss einer einzelnen Person im Zulassungsprozess möglich verringert wird. Dies soll ebenfalls eine mögliche Benachteiligung einzelner Bewerbergruppen und Bewerber verhindern.

##### Bedeutung für das System

Hinsichtlich des Zulassungssystems hat der Fachschaftsrat insbesondere das Interesse, dass das Auswahlverfahren fair erfolgt. Somit hat dieser entsprechend primär Interesse an dem Prozess der Bewerberauswahl, sowie der vertraulichen Behandlung der Daten der Bewerber.

#### Macht/Einfluss
Der Einfluss des Fachschaftsrates beschränkt sich mehr auf den Bewerbungsprozess bzw. den Zulassungskriterien und den Umgang mit den Bewerberdaten. Hier kann dieser Versuchen die Interessen in den entsprechenden Gremien der Universität durchzusetzen. Einfluss hinsichtlich konkreter Funktionalitäten und Designvorgaben hat dieser allerdings nicht.  

#### Einstellung zum Projekt
Da in der Ausganssituation auch bereits beschrieben wurde, dass der NC nicht als Auswahlkriterium herangezogen wird, und dieser auch immer wieder zu Diskussionen geführt hat und angezweifelt wurde, ob dieser sich auch für eine Auswahl von Bewerbern eignet, wird dies bei dem neuen Zulassungssystem kein Problempunkt mehr darstellen. Dementsprechend ist zu erwarten, dass der Fachschaftsrat die Entwicklung eines neuen Zulassungssystems als durchaus positiv erachtet.


### Datenmanagement / Klips-Administrator\*innen
#### Kurze Beschreibung
Das Datenmanagement der Universität ist für die Speicherung und Aufbewahrung der an der Universität erfassten Daten zuständig. Dabei unterstützen die Klips-Administratoren, da Klips normalerweise das Bewerbungssystem ist und auch andere Studierendendaten dort erfasst und geändert werden. Die Universität darf und möchte alle Daten verarbeiten, die zur Erfüllung der Aufgaben der Universität erforderlich sind. Dazu zählen Daten zum Studium, aber auch personenbezogene Daten, wie Adressdaten, die für bestimmte Prozesse, wie z.B. die Kontaktaufnahme, erforderlich sind. 

#### Interessen und Ziele
Daher hat das Datenmanagement ein Interesse daran, dass alle erforderlichen Daten erfasst werden. Wenn möglich soll dies schon während der Bewerbungsphase geschehen, da dort der Kontakt zu den Student\*innen am engsten ist. Außerdem ist dann der Mehraufwand, der durch erneute Kontaktaufnahme entsteht, am geringsten.

#### Macht / Einfluss
Das Datenmanagement hat einen geringen Einfluss auf das System, da es nicht direkt mit dem System zusammenhängt. Es ist aber für die allgemeine Datenhaltung an der Universität verantwortlich, also hat es starkes Interesse an und Einfluss auf die Art der erhobenen Daten, auf die Implementierung von Schnittstellen und Datensicherheit. Wenn es für die Datenhaltung in diesem System verantwortlich gemacht wird, hat es einen größeren Einfluss. Dann würden das Datenmanagement sich aber stark mit den Systemadministratoren überschneiden.

#### Einstellung zum Projekt
Das Datenmanagement ist eher negativ eingestellt, da die Implementierung einen Mehraufwand für die Mitarbeiter\*innen bedeutet und durch die Dezentralisierung die Datensicherheit schwieriger nachzuvollziehen und zu gewährleisten ist. 

## 1.7 Dependencies on existing systems

### Hochschulstart
Hochschulstart wird von staatlichen Universitäten genutzt, zur fairen und koordinierten Vergabe von Studienplätze an Bewerber\*innen. Dabei müssen die vom Bewerbenden eingegebenen Credentials mit der Datenbank von hochschulstart.de abgeglichen werden. Somit muss es eine Anbindung bei der Bewerbung im Universiätssystem mit der API von hochschulstart geben.

### Klips 2.0
Klips 2.0 ist das zentrale Universitätsverwaltungssystem der Universität zu Köln. Es übernimmt Aufgaben von Modul- und Prüfungsmanagement, über Raumbuchungsmanagement bis hin zu Studierendendatenverwaltung. Damit die Bewerberdaten auch in Klips gespeichert werden, muss es eine Schnittstelle dafür geben.

## 1.8 References
There are no references on other documents. 
## 1.9 Assumptions
Fill this in, if needed


# 2. Functional Requirements
## 2.1 Actor Profile Specifications

### Professoren / Mitarbeiter der Lehrstühle

### Bewerber

### Unterstützer\*in
Der/die Unterstützer\*in interagiert mit dem System, um ein\*e Bewerber\*in durch ein Empfehlungsschreiben in der Bewerbung zum Studiengang zu unterstützen. Das primäre Ziel bzw. das Bedürfnis ist es hier möglichst einfach die Empfehlung zu erstellen und abzuschicken. Dabei sollte die Interaktionsoberfläche intuitiv sein und möglichst keine Fehler erzeugen. Die Interaktion sollte möglichst geräteunabhängig erfolgen können, d.h. vom Desktopcomputer, aber auch vom mobilen Endgerät wie Smartphone oder Tablet.


### Hochschulstart
Hochschulstart ist eine zentrale Plattform, bei der sich jeder Bewerber vor seiner Bewerbung an der jeweiligen Hochschule registrieren muss. Sie koordiniert bundesweit Bewerbungen für Studiengänge. Der Service ist nur indirekt mit dem Bewerbungssystem verbunden. Es wird nur genutzt, um die zentrale Bewerbung zu überprüfen. Hochschulstart ist ein externer Akteur und hat das Interesse eines fairen Bewerbungsprozess. Direkten Einfluss auf das System haben sie dementsprechend nicht, sind jedoch trotzdem von hoher Bedeutung, da über dieses System die Bewerbungskoordination mit anderen Universitäten stattfindet.

## 2.2 Use Cases

## Bewerbung erstellen

### Describtion
Ein\*e Bewerber\*in will sich über das Zulassungssystem für den Informatik-Studiengang bewerben.

### Actors
Bewerber\*in, Hochschulstart, E-Mail Client, Datenbank

### Organizational Benefit
Der Prozess in dem Bewerber*innen ihre Daten eingeben damit diese im Bewerbungsverfahren berücksichtigt werden ist substantieller Bestandteil eines Zulassungssystems. Durch diese Funktion erhält die Universität alle relevanten Informationen über ihre Bewerber\*innen und kann eine Auswahl treffen.

### Frequency of use
Wie oft der Use Case ausgeführt wird misst sich an der Anzahl der Bewerber\*innen für den neuen Informatik Studiengang, sowie allen Bewerber\*innen zukünftiger Semester.

### Trigger
Der\*die Bewerber\*in startet den Use Case indem er*sie auf einen Link zum Zulassungssystem bzw. dessen Registrierungs-page klickt.

### Preconditions
1.	Bewerber\*in ist noch nicht vom Zulassungssystem erfasst.
2.	Bewerber\*in ist bei Hochschulstart registriert.
3.	Das Bewerbungsportal muss geöffnet sein


### Postconditions
1.	Bewerber\*in hat einen Account
2.	Bewerbung wurde vom System erfasst und in das Bewerbungsverfahren aufgenommen.
3.	Der Bewerbungsstatus wechselt auf „beworben“
4.	Bewerber\*in bekommt eine Benachrichtigung über die erfolgreiche Abgabe der Bewerbung


### Flow
1.	Bewerber\*in öffnet die Webseite des Zulassungssystem des Informatik Studiengangs und startet die Bewerbung 
2.	Der/die Bewerber\*in gibt seine/ihre E-Mail-Adresse ein und erstellt ein Password, welches entsprechend durch eine erneute Eingabe bestätigt wird. 
3.	Bestätigungsemail 
	
	3.1 Bestätigungsemail wird an Bewerber\*in gesendet
	
	3.2 Bewerber\*in bestätigt über einen Link in der E-Mail 
4.	Der/die Bewerber\*in loggt sich ein.
5.	Der/die Bewerber\*in gibt seine/ihre BID und BAN, die er/sie bei der Registrierung bei Hochschulstart erhalten hat, ein. Die persönlichen Daten werden damit übernommen.
6.	Bewerber\*in macht Angaben zu seinem/ihrem Schulabschluss
	
	6.1	Bewerber\*in gibt die Schule, Land und Ort der Schule an
	
	6.2	Bewerber\*in gibt Art der Hochschulreife an
	
	6.3	Bewerber\*in gibt Datum des Erwerbs an
7.	Bewerber\*in gibt an, dass er/sie keine Studiengänge an Hochschulen besucht hat.
8.	Bewerber\*in gibt an, dass er/sie keine abgeschlossene Berufsausbildung hat.
9.	Bewerber\*in gibt an, dass er/sie keinen Beruf ausgeübt bzw. ausübt, der einen Informatik Bezug hat.
10.	Der/die Bewerber\*in gibt an, dass er/sie keine außerschulischen Qualifikationen erworben hat.
11.	Bewerber\*in lädt notwendige Dokumente hoch.
	
	11.1	Bewerber\*in lädt Schulzeugnis hoch
	
	11.2	Bewerber\*in lädt Motivationsschreiben hoch
12.	Dem Bewerber\*in wird eine Übersicht der eingegebenen Daten angezeigt.
13.	Bewerber\*in gibt via Check-box an, alle Angaben wahrheitsgemäß gemacht zu haben
14.	 Der/die Bewerber\*in bestätigt seine/ihre Angaben.


### Alternative Flows:
In Schritt 5 des normal flow, wenn der/die Bewerber\*in sich noch nicht bei Hochschulstart registriert hat und somit noch keine BID und BAN hat:
1.	Bewerber\*in wird auf die Seite von Hochschulstart weitergeleitet und registriert sich dort.
2.	Der Use Case wird in Schritt 5 fortgeführt

In Schritt 7 des normal flow, wenn der/die Bewerber\*in bereits auf einer Hochschule eingeschrieben war:
1.	Bewerber\*in gibt an, dass er/sie bereits an einer Hochschule eingeschrieben war
2.	Bewerber\*in macht Angaben zum Studium
	
	2.1 Bewerber\*in gibt Name der Hochschule an
	
	2.2 Bewerber\*in gibt Name des Studienganges an 
	
	2.3 Bewerber\*in gibt die Studiensemester an in denen er/sie
       eingeschrieben war       
	
	2.4 Bewerber\*in gibt an ob das Studium beendet wurde oder    
      nicht
3.   Bewerber\*in lädt Hochschulzeugnis bzw. Transkript hoch
4.   Der Use Case wird in Schritt 8 fortgeführt

In Schritt 8 des normal flow, wenn der/die Bewerber\*in eine abgeschlossene Berufsausbildung hat:
1.	Bewerber\*in gibt an, dass er/sie eine Berufsausbildung abgeschlossen hat.
2.	Bewerber\*in macht Angaben zur Berufsausbildung
	
	2.1	Bewerber\*in gibt Berufsbezeichnung an
	
	2.2	Bewerber\*in gibt Ausbildungszeitraum an 
	
	2.3	Bewerber\*in lädt Ausbildungszeugnis hoch 
3.	Der Use Case wird in Schritt 9 fortgeführt 

In Schritt 9 des normal flow, wenn der/die Bewerber*in einen Beruf ausübt bzw. ausgeübt hat, welcher einen Informatik Bezug aufweist:
1.	Bewerber\*in gibt an, dass er/sie einen entsprechenden Beruf ausübt/ausgeübt hat.
2.	Bewerber\*in macht Angaben zum Beruf.
	
	2.1	Bewerber\*in gibt Berufsbezeichnung an
	
	2.2	Bewerber\*in gibt Zeitraum der Ausübung an
3.	Bewerber\*in lädt Zeugnis über die Beschäftigung hoch
4.	Der Use Case wird in Schritt 10 fortgeführt

In Schritt 10 des normal flow, wenn der/die Bewerber*in außerschulische Qualifikationen erworben hat:
1.	Bewerber\*in gibt an, dass er/sie außerschulische Qualifikationen erworben hat.
2.	Bewerber\*in macht Angaben zur außerschulischen Qualifikation
	
	2.1	Bewerber\*in gibt die Bezeichnung der Qualifikationen an 
	
	2.2	Bewerber\*in gibt an wann die jeweiligen Qualifikationen erworben wurden.
3.	Bewerber\*in lädt Zeugnis der Qualifikation hoch 
4.	Der Use Case wird in Schritt 11 fortgeführt

In Schritt 12 des normal flow, wenn der/die Bewerber\*in Änderungen an den Angaben tätigen will:
1.	Bewerber\*in ändert die entsprechenden Daten
2.	Der Use Case wird in Schritt 12 fortgeführt

In Schritt 13 des normal flow, wenn der/die Bewerber*in nicht zustimmt die Angaben wahrheitsgemäß gemacht zu haben:
1.	Bewerber\*in wird durch eine Meldung aufmerksam gemacht, dass er/sie versichern muss, dass alle Angaben der Wahrheit entsprechen, bevor die Bewerbung abgeschickt werden kann.
2.	Use Case wird in Schritt 13 des normal flow weitergeführt

### Exceptions
In Schritt 2 des normal flow, wenn die von dem/der Bewerber\*in eingegebenen Passwörter nicht übereinstimmen:
1.	Bewerber\*in gibt die Passwörter erneut ein
2.	Use Case wird in Schritt 3 des normal flow fortgeführt

In Schritt 2 des normal flow, wenn die E-Mail-Adresse bereits für eine aktive Bewerbung für den Informatik-Studiengang verwendet wurde:
1.	Der/die Bewerber\*in wird auf den Login verwiesen
2.	Use Case wird beendet

### Requirements
1. Der Use Case kann nur innerhalb des Bewerbungszeitraums,   
    festgelegt durch die Universität und ggf. rechtliche Bestimmungen,   
    ausgeführt werden.
    
2. Das System ist so konzipiert, dass sich durch die Verarbeitung der 
    Daten von Bewerber\*innen keine Verletzung des Datenschutz-
    sowie des Gleichbehandlungsgesetzes ergibt.


### User Stories
User Storys:

Als Bewerber\*in möchte ich vor dem Upload meiner Dokumente eine Übersicht mit klaren Angaben zur Benennung der Dateien, der maximalen Dateigröße und des einzuhaltenden Dateiformats erhalten.

Als Bewerber\*in möchte ich, dass eine E-Mail-Adresse auf der Webseite angegeben ist, über welche ich Fragen zum Bewerbungsprozess stellen kann.

Als Bewerber\*in möchte ich, dass eine Telefonnummer auf der Webseite angegeben ist, über welche ich Fragen zum Bewerbungsprozess stellen kann.

Als Bewerber\*in möchte ich, dass eine FAQ-Seite zur Verfügung gestellt wird, damit ich bei Fragen nachschauen kann ob diese bereits in den FAQs beantwortet wurde.

Als Bewerber\*in möchte ich, dass kleine Pop-Up-Fenster für Eingabefelder zur Verfügung gestellt werden, damit mehr Informationen darüber halten kann, welche Angaben ich tätigen muss.

Als Bewerber\*in möchte ich eine Website sehen die übersichtlich ist und eine intuitive Benutzung ermöglicht

Als Bewerber\*in möchte ich soweit wie möglich in einem Tab und Fenster bleiben und möchte nicht, dass sich weitere öffnen. 

Als Bewerber\*in möchte ich, dass ich automatisch über die einzelnen Seiten im Rahmen der Erstellung einer Bewerbung navigiert werde, damit alle Angaben in der richtigen Reihenfolge tätige und keine Angaben vergesse.

Als Bewerber\*in möchte ich darauf hingewiesen werden, wenn bestimmte Eingaben fehlen und daran gehindert werden, die Bewerbung unvollständig abzugeben.

Als Bewerber\*in möchte ich eine E-Mail zugesendet bekommen nachdem ich meine Bewerbung abgeschlossen habe, damit ich mir sicher sein kann, dass meine Bewerbung erfolgreich erfasst wurde.

Als Bewerber\*in möchte ich vor dem Beginn der Bewerbung eine Übersicht über die Schritte der Bewerbungserstellung und den notwendigen Dokumenten erhalten, damit ich bereits weiß wie die Erstellung einer Bewerbung abläuft und notwendige Dokumente vorbereiten kann.

Als Bewerber\*in möchte ich, dass ein auf der Webseite ein Video zur Verfügung gestellt wird, dass den gesamten Bewerbungsprozess beispielhaft abbildet, damit ich mich bei der Erstellung einer Bewerbung daran orientieren kann.

Als Bewerber\*in möchte ich den Prozess der Erstellung jederzeit pausieren können, damit ich die Bewerbungserstellung zu einem späteren Zeitpunkt an der pausierten Stelle fortführen kann.

Als Bewerber\*in möchte ich, dass sich die Webseite auf mein genutztes Endgerät anpasst, damit ich Geräte unabhängig alle Inhalte der Webseite lesen und alle Funktionalitäten nutzen kann.


### Bewerber\*innen sichten und Empfehlungen aussprechen

#### Beschreibung
Ein\*e Mitarbeiter\*in des Lehrstuhls sichtet eine eingegangene Bewerbung und gibt eine Empfehlung über die Zulassung des / der jeweiligen Bewerber\*in ab.

#### Akteure
Mitarbeiter\*in des Lehrstuhls, Professor\*in

#### Vorbedingungen
1. Eine ungeprüfte Bewerbung liegt vor.

#### Nachbedingungen
1. Die Bewerbung liegt dem / der Professor\*in zur Prüfung vor.
2. Der Eintrag für den / die Bewerber\*in im System wird als "zulassen" oder "ablehnen" gekennzeichnet.

#### Organizational Benefit
Die Universität erwartet dadurch eine faire Auswahl qualifizierter Bewerber mit geringer Abgangsquote.

#### Trigger
Bewerbungsphase endet.

#### Flow
1. Mitarbeiter\*in meldet sich im System an.
2. Mitarbeiter\*in öffnet Übersicht der eingegangenen Bewerbungen.
3. Mitarbeiter\*in öffnet Detailansicht der einzelnen Bewerbung.
4. Mitarbeiter\*in fällt Empfehlungsentscheidung und trägt diese in das System ein.
5. Bewerbung wird dem / der Professor\*in zur Prüfung vorgelegt.

#### Ausnahmefälle:

4.  1. In Schritt 4 bemerkt der / die Mitarbeiter\*in, dass die Bewerbung doch unvollständig ist.
    2. Der / die Mitarbeiter\*in fordert den / die Bewerber\*in per E-Mail zur Vervollständigung seiner / ihrer Angaben auf.

#### Voraussetzungen
1.	Der / die Mitarbeiter\*in hat Zugriff auf die Bewerberdaten
2.	Ein\*e Bewerber\*in hat eine Bewerbung eingereicht
3.	Die eingegangene Bewerbung ist bereits auf Vollständigkeit geprüft

### Bewerber\*innen zulassen oder ablehnen

#### Beschreibung
Ein\*e Professor\*in sichtet eine Bewerbung inklusive der Empfehlung eines / einer Mitarbeiter\*in und trifft eine Entscheidung über die Zulassung des / der Bewerber\*in.

#### Akteure
Professor\*in, Bewerber\*in

#### Vorbedingungen
1. Eine Bewerbung mit Empfehlung liegt dem / der Professor\*in vor.

#### Nachbedingungen
1. Der Eintrag für den / die Bewerber\*in im System wird als „zugelassen“ oder „abgelehnt“ gekennzeichnet.
2. Der / die Bewerber\*in wurde über die Zulassungsentscheidung in Kenntnis gesetzt.

#### Organizational Benefit
Die Universität erwartet dadurch eine faire Auswahl qualifizierter Bewerber mit geringer Abgangsquote.

#### Trigger
Professor\*in erfährt, dass eine neue Bewerbung mit Empfehlung vorliegt.

#### Flow
1. Professor\*in erfährt, dass eine neue Bewerbung mit Empfehlung vorliegt.
2. Professor\*in meldet sich im System an.
3. Professor\*in öffnet Übersicht der vorliegenden Bewerbungen mit Empfehlung.
4. Professor\*in öffnet Detailansicht der einzelnen Bewerbung.
5. Professor\*in fällt Zulassungsentscheidung und trägt diese in das System ein.
6. Professor\*in sendet Zulassungs- oder Ablehnungsbescheid an Bewerber\*in.

#### Voraussetzungen
1. Professor\*in hat Zugriff auf die Bewerberdaten.
2. Ein\*e Bewerber\*in hat eine Bewerbung eingereicht und ein\*e Mitarbeiter\*in hat eine Empfehlung ausgesprochen.

### Empfehlungsschreiben erstellen
#### Description
  - Um eine\*n Bewerber\*in zu unterstützen kann eine Dritte Person ein Empfehlungsschreiben einreichen.
#### Primary Actor
  - Unterstützer\*innen
  - Empfehlungsseite, Api und Datenbank
#### Stakeholders, interests
  - Unterstützer\*in, weil er/sie dem/der Bewerber\*in ein Empfehlungsschreiben hinzufügen möchte
  - Bewerber\*innen, da Empfehlungsschreiben ihn/sie "besser" aussehen lassen und heraussticht
  - Mitarbeiter\*innen, weil er/sie einen besseren Eindruck über den/die Bewerber\*in erhält
#### Preconditions
  - Verbindung des Frontend zur API muss vorhanden sein
  - Verbindung der API zur Datenbank muss vorhanden sein
  - Bewerber\*in ist im System zu finden
#### Postconditions
  - Anzeige des Uploadstatus
  - Anzeige von möglichen Fehlern oder Success Meldungen
  - Speichern des Empfehlungsschreibens in der Datenbank
#### Main success scenario
1. Eintragen der Informationen zur Identifizierung des Bewerbers / der Bewerberin, des Unterstützers / der Unterstützerin
1. Empfehlungstext oder Datei eingeben / hochladen
1. Erstes validieren der eingegeben Daten
1. Senden des Datenpakets an Api
1. Validieren des empfangenen Datenpakets
1. Speichern der Daten in der Datenbank
1. Api sendet Success Meldung an Unterstützer
1. Success Meldung wird auf Empfehlungsseite angezeigt
1. Unterstützer\*in schließt die Seite
#### Alternate flows
  - Wenn das Senden des Datenpakets an Api schiefgeht fängt der alternative flow an
  - Bei Fehlern der Unerreichbarkeit der Api wird eine Fehlermeldung im Frontend angezeigt "Senden fehlgeschlagen. Bitte versuchen Sie es später erneut"
  - Bei Validierungsproblemen wird eine Fehlermeldung mit dem jeweiligen Fehler angezeigt "Falsches Format der Email"
  - Bei Problemen des Speicherns in der Api wird eine Fehlermeldung gezeigt "Fehler beim Speichern. Bitte versuchen Sie es später erneut"
  - Bei Timeout der API wird unabhängig davon eine Fehlermeldung angezeigt. "Probleme bei der Verbindung. Bitte versuchen Sie es später erneut"
#### Special requirements
  - Verfügbarkeit des Frontends, Backend-Api und Datenbank
  - Usability und einfache Verwendung des Frontends, um mögliche Fehler bei der Nutzereingabe vorzubeugen
      - Zu realisieren mit klaren Inputfeldern und eindeutigen Schritten
#### Frequency of occurrence
  - Jedes Mal wenn ein\*e Unterstützer\*in ein Empfehlungsschreiben erstellen will

#### User stories
Als Unterstützer\*in möchte ich ein intuitives Interface der Seite, um fehlerfrei die Empfehlung einreichen zu können.  

Als Unterstützer\*in möchte ich nach dem Absenden des Schreibens eine Rückmeldung über das Ergebnis des Hochlandes erhalten, um sicher zu sein, ob das Hochladen geklappt hat oder es Fehler gab.

Als Unterstützer\*in möchte ich möglichst wenige Eingabefelder, damit der Vorgang in einer kurzen Zeitspanne fertiggestellt werden kann.

Als Unterstützer\*in möchte ich eine Hilfefunktion in Form von FAQs, um mir bei Fragen zum System schnell eine Antwort liefern zu können.

## 2.3 Additional User Stories
Ich als Mitarbeiter\*in / Professor\*in möchte Dokumente ausschließlich im PDF-Format sichten.
Ich als Mitarbeiter\*in / Professor\*in möchte die Bewerbernummer und den Notendurchschnitt eines / einer Bewerber\*in bereits in der Übersicht angezeigt bekommen.
Ich als Mitarbeiter\*in / Professor\*in möchte eine Detailseite zu jedem / jeder Bewerber\*in haben auf der ich alle relevanten Angaben sehen kann und alle Dokumente finde, die hochgeladen wurden, um die Bewerbung bewerten zu können.
Ich als Mitarbeiter\*in oder Professor\*in möchte vielversprechende Bewerber bewerten können, damit ich sie mir später noch einmal ansehen kann.
Ich als Mitarbeiter\*in oder Professor\*in möchte eine Übersichtsseite über alle vorgemerkten Bewerber haben, um diese vergleichen zu können.
Ich als Professor\*in möchte Bewerber durch einen Klick zulassen oder ablehnen können und diese auch per Mail benachrichtigen.

# 3 Quality Attributes

## Security
#### Confidentiality
Die Vertraulichkeit der Nutzerdaten muss durch das System gewährleistet sein. Daten eines Bewerbenden sollten nur von den dazu Berechtigten eingesehen werden können: Dem Bewerbenden selbst, vom Zulassungsausschuss, den Professor\*innen und evtl. den Administrator\*innen. Hierzu müssten im System die unterschiedlichen Rechte der jeweiligen Nutzer\*innen hinterlegt werden. Insgesamt sollte das Bewerbungssystem natürlich auch durch Sicherheitsmechanismen und -tools gegen Eingriffe von Personen und Programmen außerhalb des Stakeholder Spektrums abgesichert sein.

#### Integrity
Jede Datenänderung muss nachvollziehbar sein und einem/einer Nutzer\*in zugeordnet werden können, sodass keine Änderungen unerkannt bleiben. Zum Beispiel sollte ersichtlich sein wer an welchen Bewerbenden einen Zulassungsbescheid verschickt. Zu bestimmten Aktionen, wie das Ändern von Daten im Bewerbungsprofil sollten nur bestimmte, ggf. sogar einzelne Akteure berechtigt sein. Ein Motivationsschreiben zum Beispiel, sollte nur vom Bewerbenden selbst bearbeitet werden können, während die Anpassung von Adressdaten auch durch einen Admin getätigt werden dürften.

#### Messbarkeit
Um den Faktor Vertraulichkeit des Zulassungssystems zu messen könnte man einen Penetration Test durchführen. Dies würde insbesondere Sicherheitslücken aufdecken, die das System durch einen externen Zugriff gefährden. Um sowohl interne Vertraulichkeitsrisiken aufzudecken als auch auf Integrität zu prüfen wäre es sinnvoll im Rahmen eines Assessments zu testen ob die jeweiligen Berechtigungen der Nutzer\*innen greifen. Hier muss überprüft werden ob jede\*r Nutzer\*in auch wirklich nur die Daten sieht die er\*sie sehen darf und ob Änderungen der Daten klar zuzuordnen sind.

#### Bedeutung
Sicherheit wurde als die wichtigste Qualitätsanforderung für das Zulassungssystem identifiziert. Eine Vernachlässigung dieses Faktors könnte zu datenschutzrechtlichen Problemem führen und die Integrität des gesamten Bewerbungsverfahrens gefährden. 

## Reliability
### Verfügbarkeit
Die Verfügbarkeit des Gesamtsystems und auch der einzelnen Teile ist von besonderer Wichtigkeit. Es ist wichtig, dass das Systems in der Bewerbungszeit möglichst zuverlässig erreichbar ist für alle am System beteiligte Personen, um ein reibungsloses bewerben, Empfehlungsschreiben einsenden und Auswerten der Gesamtbewerbungen zu ermöglichen. Inbegriffen bei der Verfügbarkeit des Systems sind die Bestandteile:
* Die Frontends für Bewerber\*innen, Mitarbeiter\*innen der Universität und Empfehlungsschreiber\*innen
* Backend, die alle Bewerbungsdaten verwalten
* Datenbanken, in denen die Bewerbungen und Schreiben gespeichert werden

Messbar ist die Verfügbarkeit durch bspw. Uptime Monitoring. Desto höher die Prozentzahl an die 100% herankommt, umso besser verfügbar und zuverlässiger ist das System. Ziel sollte es immer sein die 100% zu erreichen, da dies meist nicht umsetzbar ist, sollte ein realistisches Ziel ~99.9% sein.

### Fehlertoleranz
Ein weiterer Punkt ist die Fehlertoleranz. Das ganze System sollte nicht crashen, wenn es einen Fehler bei bspw. einer Eingabe gibt. Diese Fehler sollten geloggt werden und sollte es auf der Frontendseite passieren einen Fehler anzeigen. Auf Backendseite sollte ein Processmanager den aktuellen Zustand des Systems überwachen bspw. [PM2](https://pm2.keymetrics.io/) bei NodeJS Anwendungen. Entsteht im Backend ein Fehler wird die Applikation neugestartet, dies sollte wenige Sekunden dauern. Dadurch entstehen kaum Ausfallzeiten, wenn es ein Fehler ist, der nicht offensichtlich und vom Großteil der Nutzer ausgelöst wird. Gemessen werden kann die Fehlertoleranz durch die Ausfallzeiten in einer Zeitperiode.

### Wiederherstellbarkeit
Die Wiederherstellbarkeit (Recoverability) bezogen auf die Daten kann durch das regelmäßige Erstellen von Backups gewährleistet werden. Hierbei sollte zu einer Großvater-Vater-Sohn Strategie Gebrauch gemacht werden. Dabei werden täglich inkrementelle (Sohn), wöchentlich partielle (Vater) und monatlich Vollbackups (Großvater) erstellt werden. Überprüft werden kann dieses Merkmal durch Löschen von Testdaten, die anschließend durch ein Backup wiederhergestellt werden.

## Functional Suitability

### Functional Completeness
Ein System, welches von den Nutzern gut angenommen werden soll, muss möglichst alle Funktionen enthalten, die die Nutzer brauchen. Deshalb gilt ein System als funktional vollständig, wenn es die festgelegte Aufgaben und Benutzerziele abdeckt. Das Bewerberportal würde als funktional vollständig gelten, wenn es alle Funktionen, Aufgaben und Benutzerziele enthält und alle User Stories umsetzt, die in der Anforderungsanalyse erarbeitet worden sind.
Messbar ist das durch die Anzahl vollständig umgesetzter User Stories, vorausgesetzt, die Anforderungsanalyse war erfolgreich. Wenn bei Auslieferung des Produkts noch User Stories unbearbeitet oder nicht vollständig implementiert sind, ist das System nicht funktional vollständig. Je mehr und umfangreicher die offenen User Stories sind, desto weniger vollständig ist das System.

### Functional Correctness
Funktionale Korrektheit ist der Grad, zu dem ein System die richtigen Ergebnisse liefert mit der benötigten Präzision. Im Bewerberportal würde das z.B. bedeuten, dass der Bewerber nach vollständiger Bewerbung auch als solcher gespeichert wird, dass den Mitarbeitenden des Lehrstuhls alle Bewerber mit den jeweils richtigen Daten angezeigt werden oder dass die Empfehlungsschreiben den richtigen Bewerbern zugeordnet werden. Es würden also die geforderten Funktionen auch den erwarteten Output generieren. Das kann man durch festgelegtes Black-Box-Testing messen. Wie viele der vorformulierten Testfälle führen bei vorgegebenem Input auch zu dem erwarteten, dokumentierten Outputs? Je weniger Testfälle zu dem erwarteten Ergebnis führen, desto geringer fällt die funktionale Korrektheit aus. 

### Functional Appropriateness
Unter funktionaler Angemessenheit versteht man, dass die bereitgestellten Funktionen auch die geforderten Aufgaben und Ziele der Benutzer behandeln. Dabei stellt sich die Frage, ob die implementierten Funktionen für die Erreichung der erarbeiteten Ziele hilfreich sind oder nicht. Im Bewerbungssystem würde das bedeuten, dass die implementierten Funktionen einen der drei Use Cases voranbringen würden oder diesen sekundär unterstützen. Sollte eine Funktion weder dem Bewerber dabei weiterbringen, seine Bewerbung zu vervollständigen und abzuschicken, noch den Empfehlenden dabei helfen, Empfehlungsschreiben für bestimmte Bewerber hochzuladen, noch den Mitarbeitenden des Lehrstuhls dabei unterstützen, Bewerbungen zu sichten und Zulassungen zu verteilen, gilt sie im Rahmen des Systems als funktional unangemessen. Das kann man messbar machen durch die Zuordnung der Funktionen zu Use Cases oder User Stories. Wenn es Funktionen gibt, die man keiner Anforderung zuordnen kann, ist diese entweder nicht angemessen für das System oder die Anforderungsanalyse war nicht vollständig.

## Usability
##### Responsive Design
Das Zulassungssystem wird von unterschiedlichen Nutzergruppen verwendet. Daraus resultierend wird ist es voraussehbar, dass die entsprechende Webseite auch auf unterschiedlichen Geräten aufgerufen wird und gleichzeitig erwartet wird, dass die Inhalte stets verfügbar sind und in einer angemessenen bzw. übersichtlichen Form dargestellt werden. Potenzielle Bewerber könnte beispielsweise die Webseite über ihr Smartphone aufrufen und versuchen sich für den Studiengang zu bewerben. Auch bei Personen, die ein Empfehlungsschreiben für einen Bewerber absenden möchte, ist dies durchaus zu erwarten. 
Aus diesem Grund ist es von großer Bedeutung, dass ein Responsive Webdesign gewählt wird und sich die Webseite somit dynamisch an den verwendeten Browser sowie an die Auflösung des jeweiligen Gerätes anpasst. Damit soll unteranderem auch immer eine gute Lesbarkeit der Inhalte geräteunabhängig gewährleistet werden.

#### An den User angepasste Inhalte
Die unterschiedlichen Nutzergruppen des Zulassungssystems (Bewerber, studentische Hilfskräfte, Professoren etc.) haben unterschiedliche Ziele, die bei der Nutzung der Webseite angestrebt werden. Aus diesem Grund haben diese auch unterschiedliche Informationsbedarfe. Um zu gewährleisten, dass jeder Nutzer sich schnell auf der Webseite zurechtfindet und die jeweiligen für ihn relevanten wichtigsten Funktionalitäten des Systems schnell nutzen kann, ist es essenziell eine Informationsüberflutung zu verhindern. Jeder Nutzer sollte somit hinsichtlich seiner Rolle im System identifiziert werden. Dadurch soll es dann möglich sein jedem Nutzer die für ihn relevanten Informationen, Seiten und Navigationselemente bereitzustellen. Auch sollte dabei durch die Navigation ebenfalls gewährleistet werden, dass die nutzerspezifischen Hauptfunktionalitäten bzw. Seiten durch eine minimale Anzahl von Klicks zu erreichen ist.

#### Einhaltung von allgemeinen Konventionen
Die Nutzungszeit bzw. Nutzungshäufigkeit der verschiedenen Nutzergruppen variiert sehr stark. Professoren und studentische Hilfskräfte werden voraussichtlich das Zulassungssystem öfter nutzen als Personen die Empfehlungsschreiben für Bewerber verschicken. Somit variiert auch entsprechend die Zeit, die ein Nutzer zur Einarbeitung in das System aufwendet bzw. investieren will. Von einem Professor oder einer studentischen Hilfskraft kann man eher erwarten, dass diese sich näher mit dem System auseinandersetzen, da diese das System auch öfter nutzen werden und dadurch auch automatisch mit der Zeit ein besseres Verständnis für das System aufbauen. Dies ist jedoch nicht bei allen Nutzergruppen der Fall. Aus diesem Grund ist es wichtig, dass unabhängig von der Nutzergruppe und entsprechenden Rahmenbedingungen eine intuitive Nutzung des Zulassungssystems ermöglicht wird. Um dies zu erreichen sollte man sich an allgemeine Konventionen halten und nach diesen die Webseite aufbauen. Dadurch soll die Erfahrung mit dem Umgang mit anderen Webseiten ausgenutzt werden. Somit sollte sich Beispielsweise das Logo oben links auf der Webseite befinden und Suchfelder mittig oder oben rechts angeordnet werden. Dies entspricht der allgemeinen Erwartungshaltung der User und dem Aufbau einer Vielzahl von Webseiten. Weiterhin sollten sich Elemente mit denen Interagiert werden kann, wie beispielsweise Buttons, von den anderen Elementen auf der Webseite abheben. Auch sollte die Navigationsleiste sich oben oder auf der rechten Seite der Webseite befinden. Diese sollte nicht nur eine einfache Navigation über die unterschiedlichen Seiten der Webapplikation ermöglich, sondern dem User auch Feedback darüber geben wo bzw. auf welcher Seite er sich gerade befindet und über die Darstellung des entsprechenden Pfades auch Auskunft darüber geben, wie dieser dorthin gelangt ist.
Durch kurze prägnantes Menüpunkte bzw. Links sollte der Nutzer immer im Vorhinein wissen auf welche Seite dieser beim Anklicken des jeweiligen Elementes geführt wird.
Für eine gute Lesbarkeit von Texten sollte auf einen guten Kontrast zwischen Hintergrund und Text geachtet werden. Allgemein sollten wichtige Elemente der Webseite zudem größer dargestellt werden als andere und auf lange Textblöcke verzichtet werden. 

#### Messbarkeit
Die Usabiltiy lässt sich unteranderem an der Abbruchrate von Vorgängen durch den Nutzer messen. Wenn das Zulassungssystem sehr unzugänglich und unübersichtlich ist, somit also allgemein eine schlechte Benutzerfreundlichkeit aufweist, ist es wahrscheinlicher, dass beispielweise Bewerber den Bewerbungsvorgang abbrechen und nicht abschließen. Insgesamt sollte versucht werden die Abbruchrate möglichst zu minimieren. Ziel ist es also unteranderem möglichst wenige Bewerber aufgrund einer Unzugänglichkeit des Bewerbungs- bzw. Zulassungssystems zu verlieren. Die Abbruchrate kann zudem auch bei den anderen Benutzern des Systems wie Professoren und studentischen Hilfskräften gemessen werden.
 Auch kann man die durchschnittliche Anzahl von Klicks messen, die eine Person benötigt, um die jeweilige Hauptfunktionalität des Systems zu nutzen. Bei einem Bewerber kann man somit die durchschnittliche Anzahl von Klicks messen, die benötigt werden, um den Bewerbungsprozess anzustoßen. Auch kann die Anzahl der Klicks gemessen werden, die benötigt werden, um den Bewerbungsprozess vollständig zu durchlaufen. Allgemein sollte das Ziel sein eine möglich geringe Anzahl durchschnittliche Anzahl von Klicks zu erreichen. Wenn sich eine sehr hohe durchschnittliche Klickrate (verglichen mit der minimalen Klicks, die benötigt werden und im vorhinein gemessen werden können) ist dies ein Indiz dafür, dass zum einen die Navigation nicht intuitiv und ausbaufähig ist und die Website allgemein zu unübersichtlich ist.


## Performance Efficiency
Performance Efficiency als Qualitätsmerkmal beschreibt die Fähigkeit eines Systems, Anfragen auch in hoher Zahl in angemessener Zeit bei möglichst optimaler Ressourcennutzung beantworten zu können. Im Kontext dieses Systems bedeutet dies, eine große Anzahl zeitgleich eingehender Bewerbungen bearbeiten zu können, ohne dass für den Nutzer wahrnehmbare Verzögerungen auftreten. Dabei soll das System zu jedem Zeitpunkt die ihm zugedachten Ressourcen bestmöglich ausnutzen (und weniger Ressourcen anfragen, wenn weniger Ressourcen nötig sind). Messen lässt sich der Erreichungsgrad dieses Qualitätsmerkmal durch das Beobachten der Reaktionszeit des Systems und der Auslastungsgrad der Ressourcen (CPU, RAM, Netzwerk) auch bei hoher Belastung des Systems.

# Approval

# Appendix A Interview Log
List conducted interviews and team members involved
## Tobias v.E.
Tobias hat eine Ausbildung zum Fachinformatiker für Systemintegration absolviert, studiert momentan berufsbegleitend Wirtschaftsinformatik an der FOM und überlegt in ein Informatik-lastigeres Studium zu wechseln. Er hat nach den Abitur, sowie nach der Ausbildung Erfahrungen mit den Bewerbungen an Universitäten gemacht. Er weiß also, wie Bewerbungsportale funktionieren, kennt gute und schlechte Beispiele davon und hat Vorstellungen, wie ein besseres Bewerbungssystem aussehen könnte.
Tobias nimmt im Rahmen des Interviews die Rolle des Bewerbers an. An dem Interview nehmen des weiteren Yassine, Max, Laurenz und Cedric teil.


## Phil Hennel
Phil ist Mitarbeiter des Lehrstuhls für Information Systems and Integrated Information Systems an der WiSo Fakultät. Er ist bei einer Ausweitung des Bewerbungssystem an andere Fakultäten auch in der Position Bewerbungen zu sichten, zu bewerten und somit eine Vorentscheidung darüber zu treffen, ob die Bewerbung empfohlen wird oder nicht. Da er die aktuelle Situation mit KLIPS gut kennt, hat er uns seine Vorraussetzungen und Verbesserungen für ein neues System im Interview genannt.
An dem Interview nehmen teil: Cedric, Laurenz, Max, Niklas und Yassine
# Appendix B Conflicting Requirements and Resolution
## Faire Bewerberauswahl
Im aktuellen Konzept hat der/die Professor\*in die alleinige Entscheidungsgewalt, ob ein\*e Bewerber\*in eine Zusage erhält oder nicht. Dies könnte einen Wertekonflikt darstellen. Die Mitarbeiter*innen des Lehrstuhls können die Bewerber\*innen zwar empfehlen, jedoch ist das Ergebnis dadurch nicht zwingend sicher. Dadurch kann eine unfaire Verteilung der Studienplätze stattfinden. Eine der beiden Lösungen um eine faire Entscheidung frei von (unbewussten) Vorbehalten zu gewährleisten ist die komplette Anonymisierung der Bewerbung.

Die zweite Lösung wäre es, wenn bspw. eine Empfehlung zu einer Bewerbung ausgesprochen wird, diese Bewerbung vom Professoren oder der Professorin dennoch abgelehnt wird, ein Gremium einzuschalten. Dieses Gremium besteht aus mehreren Personen und sichtet die Bewerbung erneut und diskutiert über die endgültige Entscheidung. Dabei ist die Entscheidung des  Professoren / der Professorin noch nicht endgültig, und wird nicht abgeschickt bis das Gremium eine Abschlussentscheidung getroffen hat.

## Nachträgliches Bearbeiten der Empfehlungen
Zwischen den Mitarbeiter\*innen und den Professor\*innen besteht ein Interessenkonflikt. Die Mitarbeiter\*innen möchten getroffene Empfehlungen zugunsten der Fairness noch anpassen können, während die Professor\*innen die Empfehlungen nicht stapelweise erhalten möchten.

Der Konflikt wird zugunsten der Mitarbeiter\*innen gelöst. Sie dürfen die Empfehlungen nachträglich noch anpassen, da die Fairness im Zulassungsprozess höher gewertet wird als das Komfortbedürfnis der Professor\*innen. Die höhere Hierarchieebene der Professor\*innen wird hierbei bewusst nicht herangezogen, da die Fairness im Zulassungsprozess ebenfalls im Interesse des / der Dekan\*in, des Zulassungsausschusses, des Gesetzgebers und der Fachschaft ist.

## Konflikt zwischen Bewerber und Universität

#### Konfliktbeschreibung:
Da der/die Bewerber\*in, welche/r das Zulassungssystem nutzt, um sich für den neuen Informatikstudiengang zu bewerben, sich auch für anderen Studiengänge bewirbt und hierbei wiederum andere Bewerbungsportale genutzt werden, muss dieser seine persönlichen Daten separat für jede einzelne Bewerbung eintragen und abschicken. Dabei werden jedoch meist von jedem Bewerbungsportal die gleichen persönlichen Daten angefordert. Insgesamt stellt das erneute Eintragen der persönlichen Daten nicht nur ein vermeidbaren Mehraufwand für den/die Bewerber\*in dar. Der/die Bewerber\*in gibt jedes Mal sehr persönliche Daten preis, die jedoch zum größten Teil erst bei der Annahme des/der Bewerbenden von der Universität benötigt werden.  Auch verliert der/die Bewerbende bei einer Vielzahl von Bewerbungen schnell den Überblick darüber, wo überall die persönlichen Daten übergeben wurden und kann auch nicht bei allen Bewerbungsportalen prüfen ob die allgemeine Datenschutzstandards eingehalten werden.

Die Universität hingegen will direkt zu Beginn die persönlichen Daten eines/einer jeden Bewerbenden erfassen, selbst wenn diese zum Teil gar nicht im Bewerbungsprozess an sich benötigt werden. Somit will die Universität jedoch sicherstellen, dass zum einen die notwendigen Daten zur Verfügung stehen, die beispielweise auch benötigt werden, um Abschlusszeugnisse zu prüfen, zum anderen jedoch auch die restlichen Daten, die nicht zwingend für den Bewerbungsprozess dafür aber bei einer Annahme des/der Bewerbenden benötigt werden, bereitstehen und diese nicht erst noch von dem Bewerber angefragt werden müssen. Eine erneute Anfrage der persönlichen Daten stellt für die Universität einen vermeidbaren Mehraufwand dar und eine Antwort durch den/die Bewerbende/n kann Zeit in Anspruch nehmen.  


#### Konfliktart:
Im wesentliche stellt dieser Konflikt ein Interessenskonflikt dar. Die Universität und der/die 
Bewerbende weisen unterschiedliche Interessen und Bedürfnisse auf. Der/die Bewerbende will möglichst wenige Daten von sich preisgeben und zudem eine erneute Eingabe von den persönlichen Daten für jedes einzelne Bewerbungsportal vermeiden. Die Universität will hingegen möglichst alle Daten zu Beginn einer Bewerbung, um einen Mehraufwand und zeitliche Verzögerungen im Bewerbungsprozess, ausgelöst durch den/die Bewerbende, verhindern. Jedoch spielen auch in diesem Fall auch Werte eine Rolle. Der/die Bewerbende will persönliche Daten nur dann preisgeben, wenn diese auch wirklich benötigt werden, um dadurch den Schutz seiner persönlichen Daten sicher zu stellen.

#### Lösung:
Um diesen Konflikt zu lösen wurde ein Kompromiss gemacht. Der/die Bewerbende muss sich bei einer Bewerbung für den neuen Informatikstudiengang erst bei Hochschulstart angemeldet haben. Dort werden die persönlichen Daten des/der Bewerbenden erfasst. Erst dann ist die Bewerbung für den Informatikstudiengang möglich. Dabei muss die durch Hochschulstart generierte BIN und BAN eingetragen werden, um eine Verbindung zur Hochschulstart aufbauen zu können. Die Universität erhält über Hochschulstart zu Beginn nur die für den Bewerbungsprozess notwendigen persönlichen Daten. Erst nach einer Annahme erfolgt eine Übertragung der restlichen Daten. Damit wird zum einen gewährleistet, dass der/die Bewerbende seine/ihre persönlichen Daten nicht in jedem Bewerbungsportal manuell eingeben muss, da auch viele weitere Universitäten und Studiengang Bewerbungen über Hochschulstart abwickeln. Zum anderen wird jedoch auch der durch den/die Bewerbende/n geforderte Datenschutz gewährleistet. Die Universität hingegen erhält hingegen alle benötigten persönlichen Daten des/der Bewerbenden und muss diese nicht erst separat anfragen.  

## Vorsortierung der Bewerbungen

Aus unserem Interview mit einem Research Assistant an der Universität war zu entnehmen, dass dieser sich eine Vorsortierung der Bewerbenden anhand dessen Bewerbungsdaten wünschen würde. Aus seiner Sicht würde es das Auswahlverfahren vereinfachen und die Qualität der im Auswahlprozess berücksichtigten Bewerber\*innen erhöhen, wenn man beispielweise Personen mit mathematisch naturwissenschaftlichem Fokus im Abitur oder Erfahrungen in der Programmierung automatisch bevorzugen würde. Im Interview mit einem Doktorand dessen Aufgabe ebenfalls darin besteht Bewerbungen zu sichten und eine Vorauswahl zu treffen, sprach sich dieser gegen eine Vorsortierung aus, da sämtliche eingegangene Bewerbungen gesichtet werden sollten. Hier könnte es sich im Ansatz um einen Wertekonflikt, in jedem Fall aber einen Interessenkonflikt handeln, durch unterschiedliche Ansichten darüber ob und wie man Bewerbungen nach Qualität der Bewerber\*innen priorisieren sollte.
Interessanterweise handelt es sich hier um einen Konflikt innerhalb einer Stakeholderkategorie. Daher können beide Interview Partner als gleichrangig angesehen werden. Es könnte sein, dass dieser Konflikt vergleichsweise einfach durch Overruling gelöst werden könnte, indem eine höhere Instanz wie ein Professor oder vorzugsweise der Zulassungsausschuss eine Entscheidung fällt oder eine bereits getroffene Entscheidung dieser Parteien eine Diskussion über eine Funktion zur Vorauswahl obsolet macht. 


# Appendix C Quality Assurance
Fill this in
