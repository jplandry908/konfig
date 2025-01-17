# DtoResponsesLatestHeadlinesResponseArticleResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Author** | Pointer to **string** |  | [optional] 
**Authors** | Pointer to [**Authors**](Authors.md) |  | [optional] 
**Journalists** | Pointer to [**Journalists**](Journalists.md) |  | [optional] 
**PublishedDate** | Pointer to **string** |  | [optional] 
**PublishedDatePrecision** | Pointer to **string** |  | [optional] 
**UpdatedDate** | Pointer to **string** |  | [optional] 
**UpdatedDatePrecision** | Pointer to **string** |  | [optional] 
**ParseDate** | Pointer to **string** |  | [optional] 
**Link** | **string** |  | 
**DomainUrl** | **string** |  | 
**FullDomainUrl** | **string** |  | 
**NameSource** | Pointer to **string** |  | [optional] 
**IsHeadline** | Pointer to **string** |  | [optional] 
**PaidContent** | Pointer to **bool** |  | [optional] 
**ExtractionData** | **string** |  | 
**Country** | Pointer to **string** |  | [optional] 
**Rights** | Pointer to **string** |  | [optional] 
**Rank** | **int32** |  | 
**Media** | Pointer to **string** |  | [optional] 
**Language** | Pointer to **string** |  | [optional] 
**Content** | Pointer to **string** |  | [optional] 
**WordCount** | Pointer to **int32** |  | [optional] [default to 0]
**IsOpinion** | Pointer to **bool** |  | [optional] 
**TwitterAccount** | Pointer to **string** |  | [optional] 
**AllLinks** | Pointer to [**AllLinks**](AllLinks.md) |  | [optional] 
**AllDomainLinks** | Pointer to [**AllDomainLinks**](AllDomainLinks.md) |  | [optional] 
**Nlp** | Pointer to **map[string]interface{}** |  | [optional] [default to {}]
**Id** | **string** |  | 
**Score** | **float32** |  | 

## Methods

### NewDtoResponsesLatestHeadlinesResponseArticleResult

`func NewDtoResponsesLatestHeadlinesResponseArticleResult(title string, link string, domainUrl string, fullDomainUrl string, extractionData string, rank int32, id string, score float32, ) *DtoResponsesLatestHeadlinesResponseArticleResult`

NewDtoResponsesLatestHeadlinesResponseArticleResult instantiates a new DtoResponsesLatestHeadlinesResponseArticleResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDtoResponsesLatestHeadlinesResponseArticleResultWithDefaults

`func NewDtoResponsesLatestHeadlinesResponseArticleResultWithDefaults() *DtoResponsesLatestHeadlinesResponseArticleResult`

NewDtoResponsesLatestHeadlinesResponseArticleResultWithDefaults instantiates a new DtoResponsesLatestHeadlinesResponseArticleResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitle

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetTitle(v string)`

SetTitle sets Title field to given value.


### GetDescription

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAuthor

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetAuthor() string`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetAuthorOk() (*string, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetAuthor(v string)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.

### GetAuthors

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetAuthors() Authors`

GetAuthors returns the Authors field if non-nil, zero value otherwise.

### GetAuthorsOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetAuthorsOk() (*Authors, bool)`

GetAuthorsOk returns a tuple with the Authors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthors

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetAuthors(v Authors)`

SetAuthors sets Authors field to given value.

### HasAuthors

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasAuthors() bool`

HasAuthors returns a boolean if a field has been set.

### GetJournalists

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetJournalists() Journalists`

GetJournalists returns the Journalists field if non-nil, zero value otherwise.

### GetJournalistsOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetJournalistsOk() (*Journalists, bool)`

GetJournalistsOk returns a tuple with the Journalists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJournalists

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetJournalists(v Journalists)`

SetJournalists sets Journalists field to given value.

### HasJournalists

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasJournalists() bool`

HasJournalists returns a boolean if a field has been set.

### GetPublishedDate

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetPublishedDate() string`

GetPublishedDate returns the PublishedDate field if non-nil, zero value otherwise.

### GetPublishedDateOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetPublishedDateOk() (*string, bool)`

GetPublishedDateOk returns a tuple with the PublishedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedDate

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetPublishedDate(v string)`

SetPublishedDate sets PublishedDate field to given value.

### HasPublishedDate

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasPublishedDate() bool`

HasPublishedDate returns a boolean if a field has been set.

### GetPublishedDatePrecision

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetPublishedDatePrecision() string`

GetPublishedDatePrecision returns the PublishedDatePrecision field if non-nil, zero value otherwise.

### GetPublishedDatePrecisionOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetPublishedDatePrecisionOk() (*string, bool)`

GetPublishedDatePrecisionOk returns a tuple with the PublishedDatePrecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedDatePrecision

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetPublishedDatePrecision(v string)`

SetPublishedDatePrecision sets PublishedDatePrecision field to given value.

### HasPublishedDatePrecision

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasPublishedDatePrecision() bool`

HasPublishedDatePrecision returns a boolean if a field has been set.

### GetUpdatedDate

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetUpdatedDate() string`

GetUpdatedDate returns the UpdatedDate field if non-nil, zero value otherwise.

### GetUpdatedDateOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetUpdatedDateOk() (*string, bool)`

GetUpdatedDateOk returns a tuple with the UpdatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedDate

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetUpdatedDate(v string)`

SetUpdatedDate sets UpdatedDate field to given value.

### HasUpdatedDate

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasUpdatedDate() bool`

HasUpdatedDate returns a boolean if a field has been set.

### GetUpdatedDatePrecision

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetUpdatedDatePrecision() string`

GetUpdatedDatePrecision returns the UpdatedDatePrecision field if non-nil, zero value otherwise.

### GetUpdatedDatePrecisionOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetUpdatedDatePrecisionOk() (*string, bool)`

GetUpdatedDatePrecisionOk returns a tuple with the UpdatedDatePrecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedDatePrecision

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetUpdatedDatePrecision(v string)`

SetUpdatedDatePrecision sets UpdatedDatePrecision field to given value.

### HasUpdatedDatePrecision

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasUpdatedDatePrecision() bool`

HasUpdatedDatePrecision returns a boolean if a field has been set.

### GetParseDate

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetParseDate() string`

GetParseDate returns the ParseDate field if non-nil, zero value otherwise.

### GetParseDateOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetParseDateOk() (*string, bool)`

GetParseDateOk returns a tuple with the ParseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParseDate

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetParseDate(v string)`

SetParseDate sets ParseDate field to given value.

### HasParseDate

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasParseDate() bool`

HasParseDate returns a boolean if a field has been set.

### GetLink

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetLink() string`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetLinkOk() (*string, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetLink(v string)`

SetLink sets Link field to given value.


### GetDomainUrl

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetDomainUrl() string`

GetDomainUrl returns the DomainUrl field if non-nil, zero value otherwise.

### GetDomainUrlOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetDomainUrlOk() (*string, bool)`

GetDomainUrlOk returns a tuple with the DomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainUrl

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetDomainUrl(v string)`

SetDomainUrl sets DomainUrl field to given value.


### GetFullDomainUrl

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetFullDomainUrl() string`

GetFullDomainUrl returns the FullDomainUrl field if non-nil, zero value otherwise.

### GetFullDomainUrlOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetFullDomainUrlOk() (*string, bool)`

GetFullDomainUrlOk returns a tuple with the FullDomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullDomainUrl

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetFullDomainUrl(v string)`

SetFullDomainUrl sets FullDomainUrl field to given value.


### GetNameSource

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetNameSource() string`

GetNameSource returns the NameSource field if non-nil, zero value otherwise.

### GetNameSourceOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetNameSourceOk() (*string, bool)`

GetNameSourceOk returns a tuple with the NameSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameSource

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetNameSource(v string)`

SetNameSource sets NameSource field to given value.

### HasNameSource

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasNameSource() bool`

HasNameSource returns a boolean if a field has been set.

### GetIsHeadline

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetIsHeadline() string`

GetIsHeadline returns the IsHeadline field if non-nil, zero value otherwise.

### GetIsHeadlineOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetIsHeadlineOk() (*string, bool)`

GetIsHeadlineOk returns a tuple with the IsHeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsHeadline

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetIsHeadline(v string)`

SetIsHeadline sets IsHeadline field to given value.

### HasIsHeadline

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasIsHeadline() bool`

HasIsHeadline returns a boolean if a field has been set.

### GetPaidContent

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetPaidContent() bool`

GetPaidContent returns the PaidContent field if non-nil, zero value otherwise.

### GetPaidContentOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetPaidContentOk() (*bool, bool)`

GetPaidContentOk returns a tuple with the PaidContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidContent

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetPaidContent(v bool)`

SetPaidContent sets PaidContent field to given value.

### HasPaidContent

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasPaidContent() bool`

HasPaidContent returns a boolean if a field has been set.

### GetExtractionData

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetExtractionData() string`

GetExtractionData returns the ExtractionData field if non-nil, zero value otherwise.

### GetExtractionDataOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetExtractionDataOk() (*string, bool)`

GetExtractionDataOk returns a tuple with the ExtractionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtractionData

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetExtractionData(v string)`

SetExtractionData sets ExtractionData field to given value.


### GetCountry

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetRights

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetRights() string`

GetRights returns the Rights field if non-nil, zero value otherwise.

### GetRightsOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetRightsOk() (*string, bool)`

GetRightsOk returns a tuple with the Rights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRights

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetRights(v string)`

SetRights sets Rights field to given value.

### HasRights

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasRights() bool`

HasRights returns a boolean if a field has been set.

### GetRank

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetRank() int32`

GetRank returns the Rank field if non-nil, zero value otherwise.

### GetRankOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetRankOk() (*int32, bool)`

GetRankOk returns a tuple with the Rank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRank

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetRank(v int32)`

SetRank sets Rank field to given value.


### GetMedia

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetMedia() string`

GetMedia returns the Media field if non-nil, zero value otherwise.

### GetMediaOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetMediaOk() (*string, bool)`

GetMediaOk returns a tuple with the Media field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedia

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetMedia(v string)`

SetMedia sets Media field to given value.

### HasMedia

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasMedia() bool`

HasMedia returns a boolean if a field has been set.

### GetLanguage

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetContent

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetWordCount

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetWordCount() int32`

GetWordCount returns the WordCount field if non-nil, zero value otherwise.

### GetWordCountOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetWordCountOk() (*int32, bool)`

GetWordCountOk returns a tuple with the WordCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCount

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetWordCount(v int32)`

SetWordCount sets WordCount field to given value.

### HasWordCount

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasWordCount() bool`

HasWordCount returns a boolean if a field has been set.

### GetIsOpinion

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetIsOpinion() bool`

GetIsOpinion returns the IsOpinion field if non-nil, zero value otherwise.

### GetIsOpinionOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetIsOpinionOk() (*bool, bool)`

GetIsOpinionOk returns a tuple with the IsOpinion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsOpinion

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetIsOpinion(v bool)`

SetIsOpinion sets IsOpinion field to given value.

### HasIsOpinion

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasIsOpinion() bool`

HasIsOpinion returns a boolean if a field has been set.

### GetTwitterAccount

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetTwitterAccount() string`

GetTwitterAccount returns the TwitterAccount field if non-nil, zero value otherwise.

### GetTwitterAccountOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetTwitterAccountOk() (*string, bool)`

GetTwitterAccountOk returns a tuple with the TwitterAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwitterAccount

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetTwitterAccount(v string)`

SetTwitterAccount sets TwitterAccount field to given value.

### HasTwitterAccount

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasTwitterAccount() bool`

HasTwitterAccount returns a boolean if a field has been set.

### GetAllLinks

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetAllLinks() AllLinks`

GetAllLinks returns the AllLinks field if non-nil, zero value otherwise.

### GetAllLinksOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetAllLinksOk() (*AllLinks, bool)`

GetAllLinksOk returns a tuple with the AllLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllLinks

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetAllLinks(v AllLinks)`

SetAllLinks sets AllLinks field to given value.

### HasAllLinks

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasAllLinks() bool`

HasAllLinks returns a boolean if a field has been set.

### GetAllDomainLinks

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetAllDomainLinks() AllDomainLinks`

GetAllDomainLinks returns the AllDomainLinks field if non-nil, zero value otherwise.

### GetAllDomainLinksOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetAllDomainLinksOk() (*AllDomainLinks, bool)`

GetAllDomainLinksOk returns a tuple with the AllDomainLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDomainLinks

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetAllDomainLinks(v AllDomainLinks)`

SetAllDomainLinks sets AllDomainLinks field to given value.

### HasAllDomainLinks

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasAllDomainLinks() bool`

HasAllDomainLinks returns a boolean if a field has been set.

### GetNlp

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetNlp() map[string]interface{}`

GetNlp returns the Nlp field if non-nil, zero value otherwise.

### GetNlpOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetNlpOk() (*map[string]interface{}, bool)`

GetNlpOk returns a tuple with the Nlp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNlp

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetNlp(v map[string]interface{})`

SetNlp sets Nlp field to given value.

### HasNlp

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) HasNlp() bool`

HasNlp returns a boolean if a field has been set.

### GetId

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetId(v string)`

SetId sets Id field to given value.


### GetScore

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetScore() float32`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) GetScoreOk() (*float32, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *DtoResponsesLatestHeadlinesResponseArticleResult) SetScore(v float32)`

SetScore sets Score field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


