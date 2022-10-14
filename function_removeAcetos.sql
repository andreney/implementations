/*CREATE FUNCTION dbo.removerAcento(@textoOriginal VARCHAR(300))
RETURNS VARCHAR(300)
AS BEGIN
	DECLARE @comAcento AS VARCHAR(300)
	DECLARE @semAcento AS VARCHAR(300)
	DECLARE @aux AS INT
	DECLARE @pos AS INT
	
	SET @comAcento = 'àáâãäåçèéêëìíîïòóôõöùúûüÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜ-'
	SET @semAcento = 'aaaaaaceeeeiiiiooooouuuuAAAAAACEEEEIIIIOOOOOUUUU '
	SET @aux = 1
	
	WHILE @aux <= LEN(@textoOriginal)
	BEGIN
		SET @pos = CHARINDEX(SUBSTRING(@textoOriginal, @aux, 1), @comAcento, 1);
		IF @pos > 0
			SET @textoOriginal = REPLACE(@textoOriginal,
				SUBSTRING(@comAcento, @pos, 1),
				SUBSTRING(@semAcento, @pos, 1)
			);
		SET @aux = @aux + 1
	END
	RETURN @textoOriginal
END*/

SELECT TOP 50 UPPER(dbo.removerAcento(Descricao)) CursoSemAcento, Descricao FROM IB.T007_Cursos
